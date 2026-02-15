import { mongoConnect } from "@/lib/mongoConnect";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import *as bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
    throw new Error("No jwt secret found");
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { client, db } = await mongoConnect();
        const { email, password } = await req.json();

        // find user
        const user = await db.collection("users").findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // compare password
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 });
        }

        //  Genarate jwt
        const token = jwt.sign({
            id: user._id.toString(),
            email: user.email,
            role: user.role
        },
            JWT_SECRET,
            { expiresIn: '7d' }

        )

        const res = NextResponse.json({
            message: "Login Successfull",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })


        // Set cookie options
        res.cookies.set({
            name: "token",
            value: token,
            httpOnly: true, // cannot be accessed by JS
            path: "/", // cookie valid for all routes
            maxAge: 60 * 60 * 24, // 1 day in seconds
            sameSite: "strict", // security
            secure: process.env.NODE_ENV === "production",
        });

        return res;


    }
    catch (err) {
        console.log(err);
    }
}