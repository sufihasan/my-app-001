import { mongoConnect } from "@/lib/mongoConnect";
import { TEvent } from "@/types/event";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// context: { params: Promise<{ id: string }> }  //new way
// context: { params: { id: string } }  //old way
export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const { client, db } = await mongoConnect();
        const event = await db.collection("events").findOne({ _id: new ObjectId(id) });



        if (!event) {
            return NextResponse.json(
                { error: 'All field are required' },
                { status: 400 }
            )
        }

        const formattedEvents: TEvent = {
            id: event._id.toString() as string,
            title: event.title,
            date: event.date,
            location: event.location,
            image: event.image,
            description: event.description,
        }

        return NextResponse.json(formattedEvents);

    } catch (error) {
        console.log(error);
    }
}