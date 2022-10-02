// include needed packages to set up the server
const express = require("express");
const config = require("dotenv").config();
const connectDB = require("./config/database");
connectDB(process.env.LOCAL_MONGODB_URL);
// create express server object
const app = express();

// uses specific middleware
// app.use()
const port = 3000;

// home (default) route  when user nagivate to differ URL path
app.get("/", (_req, res) => {
  res.send("Respone from the server");
});

// listen to specfic port  waiting for client request
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
