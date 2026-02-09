import { mongoConnect } from "@/lib/mongoConnect";
import { NextResponse } from "next/server";

async function GET() {
    try {
        const { client, db } = await mongoConnect();
        const events = await db.collection("events").find().toArray();

        const formattedEvents = events.map((event) => ({
            id: event._id.toString(),
            title: event.title,
            date: event.date,
            location: event.location,
            image: event.image,
            description: event.description,
        }))

        return NextResponse.json(formattedEvents);
    }
    catch (err) {
        console.log(err);
    }
}