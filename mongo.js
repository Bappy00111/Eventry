import Mongoose from "mongoose";


export async function connectToMongoDB() {
    try {
        const conn = await Mongoose.connect(process.env.MONGO_URI);
        // console.log("MongoDB connected successfully");
        return conn;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        // throw new Error("Failed to connect to MongoDB");
    }   
}