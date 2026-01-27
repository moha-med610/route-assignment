import { MongoClient } from "mongodb";

const connection = new MongoClient(process.env.MONGO_URI);

export const connectDb = async () => {
  try {
    await connection.connect();
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error To connect Database: ", error.message);
    throw error;
  }
};

export const db = connection.db("route");
