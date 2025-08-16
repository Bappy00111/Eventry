// import Mongoose from "mongoose";


// export async function connectToMongoDB() {
//     try {
//         const conn = await Mongoose.connect(process.env.MONGO_URI);
//         // console.log("MongoDB connected successfully");
//         return conn;
//     } catch (error) {
//         console.error("MongoDB connection error:", error);
//         // throw new Error("Failed to connect to MongoDB");
//     }   
// }

import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI
const cached = {}
async function connectMongo() {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    )
  }
  if (cached.connection) {
    return cached.connection
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    }
    cached.promise = mongoose.connect(MONGO_URI, opts)
  }
  try {
    cached.connection = await cached.promise
  } catch (e) {
    cached.promise = undefined
    throw e
  }
  return cached.connection
}
export default connectMongo
