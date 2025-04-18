import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';


const connectDB = async () => {
    try {
        console.log(`${process.env.MONGODB_URL}/${DB_NAME}`);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MONGODB CONNECTED!! DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MONGODB Connection Error', error);
        process.exit(1); // for failure
    }
}

export default connectDB;