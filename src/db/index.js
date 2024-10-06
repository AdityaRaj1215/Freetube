import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =async ()=>{
    try {
        console.log()
       const connectioninstance= await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected!! DB host${connectioninstance.connection.host}`)
    } catch (error) {
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDB connection error" ,error)
        process.exit(1);
    }
}
export default connectDB;