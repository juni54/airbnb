// models/Home.js
import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  houseName: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: String,
    default: () =>
      new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
  },
});

const Home = mongoose.model("Home", homeSchema);
export default Home;
