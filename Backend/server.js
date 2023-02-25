const express = require('express')
const app = express()
const status = require("./controller/get_status");
const PORT = 3001;
require('dotenv').config()
const bodyParser = require('body-parser');
const dbconn=require('./db');

//database connection
dbconn();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())

// handling cors errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers: Content-Type, Custom-Header");
  next();
});

//Api Endpoints
app.get('/', status);

//running listen event on server app
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
})