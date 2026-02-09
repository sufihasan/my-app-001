import { mongoConnect } from "@/lib/mongoConnect";
import { TEvent } from "@/types/event";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
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


// create a event
export async function POST(req: NextRequest) {
    try {
        const { client, db } = await mongoConnect();
        const data: TEvent = req.json();

        if (!data.title || !data.location || !data.description) {
            return NextResponse.json(
                { error: 'All field are required' },
                { status: 400 }
            )
        }

        const result = await db.collection('events').insertOne({
            data,
        })

        return NextResponse.json(
            { message: 'Event created', id: result.insertedId },
            {
                status: 201
            }
        );

    }
    catch (err) {
        console.log(err);
    }
}