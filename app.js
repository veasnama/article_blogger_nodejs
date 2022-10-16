// include needed packages to set up the server
const express = require("express");
const config = require("dotenv").config();
const connectDB = require("./config/database");
const path = require("path");
connectDB(process.env.LOCAL_MONGODB_URL);
// create express server object
const app = express();

// Load View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// set public static folder to express
app.use(express.static(path.join(__dirname, "public")));
// uses specific middleware
// app.use()
// home (default) route  when user nagivate to differ URL path
// })

let home = require("./routes/home");
let article = require("./routes/article");
let user = require("./routes/user");
app.use(article);
app.use(home);
app.use(user);
const port = 3000;
// listen to specfic port  waiting for client request
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
