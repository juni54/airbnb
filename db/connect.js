// db/connect.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    console.log("🔗 Connecting to:", process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoose.connect(process.env.MONGODB_URI); // 👈 clean, no options needed
    console.log("✅ MongoDB connected successfully.");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;

