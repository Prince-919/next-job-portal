import mongoose from "mongoose";
import { config } from "./config";

export async function dbConnect() {
  try {
    mongoose.connect(config.databaseUrl as string);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to databse successfully.");
    });
    connection.on("error", (error) => {
      console.log(`Error in  connected to database. ${error}`);
    });
  } catch (error) {
    console.error(`Failed to connect to database. ${error}`);
  }
}
