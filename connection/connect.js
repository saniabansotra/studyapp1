const mongoose = require("mongoose");
require("dotenv").config();
const connectDatabase = () => {
  try {
    mongoose.connect(process.env.MONGO).then(() => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDatabase };
