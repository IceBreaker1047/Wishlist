import mongoose from "mongoose";

const MONGO_URL = 'mongodb+srv://anshr4993_db_user:test1234@wishlist.jiosond.mongodb.net/';

async function main() {
  try {
    await mongoose.connect(MONGO_URL, { serverSelectionTimeoutMS: 10000, family: 4 });
    console.log("Connected to MongoDB!");
    await mongoose.disconnect();
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
