const mongoose = require("mongoose");

const connectDB = async (db_url) => {
  const conn = await mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected: on host: ${conn.connection.host}`);
};

module.exports = connectDB;
