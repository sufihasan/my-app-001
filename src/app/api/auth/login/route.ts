import { mongoConnect } from "@/lib/mongoConnect";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import *as bcrypt from "bcrypt";

async function POST(req: NextRequest, res: NextResponse) {
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
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }


    }
    catch (err) {
        console.log(err);
    }
}