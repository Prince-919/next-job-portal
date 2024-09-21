import mongoose from "mongoose";

export async function dbConnect() {
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
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
