import { Db, MongoClient } from "mongodb";
import clientPromise from "./mongodb";

export async function mongoConnect(): Promise<{
    client: MongoClient;
    db: Db;
}> {
    const client = await clientPromise;
    // console.log(client);
    const db = client.db("NextEvent");
    return { client, db };
}