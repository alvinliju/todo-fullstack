const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("db connected");
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = connectDB;
