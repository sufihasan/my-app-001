import { mongoConnect } from "@/lib/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { client, db } = await mongoConnect();
        const { email, password } = await req.json();
    }
    catch (err) {
        console.log(err);
    }
}