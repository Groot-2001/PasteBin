const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const userRoute = require("./api/user_api.js");
const pasteRoute = require("./api/paste_api.js");
require("dotenv").config();
const dbconn = require("./db");

//creating express application
const app = express();

//setting up with Port
const PORT = process.env.PORT || 3001;

//Setting up with helmet
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());

//database connection
dbconn();

// parse application/json
app.use(bodyParser.json({ limit: "10mb" }));

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// handling cors errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers: Content-Type, Custom-Header");
  next();
});

//Api Endpoints looks like
//https://localhost:3001/auth/signup
app.use("/auth", userRoute);
//https://localhost:3001/api/create_paste
app.use("/api", pasteRoute);

//handling 404 error
app.use("*", (req, res, next) => {
  res.status(404).json("404,Sorry we couldn't find that page");
  next();
});

// body parser error catcher
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.type);
    res.status(400).json({ error: "error parsing data" });
  } else {
    next();
  }
});

//running listen event on server app
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
