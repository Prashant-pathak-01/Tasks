import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database.zh0d3.mongodb.net/?retryWrites=true&w=majority&appName=database`;
const connection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};

export default connection;
