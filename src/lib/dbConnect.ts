// note : mongodb.ts and dbconnect.ts both are same
// for dbconnect.ts mongodb can block your account.

// import { MongoClient } from "mongodb";

// if (!process.env.MONGODB_URI) {
//     throw new Error("mongodb uri not found");
// }

// const uri = process.env.MONGODB_URI;

// export async function dbConnect() {
//     const client = new MongoClient(uri);
//     await client.connect();
//     const db = client.db("NextEvent");
//     return { client, db };
// }

