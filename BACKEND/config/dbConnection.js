const mongoose = require("mongoose");
const { MONGO_URI } = require("./dotenv");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" DB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
