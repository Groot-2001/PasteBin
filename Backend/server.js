const express = require('express')
const helmet = require('helmet');
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser');
const dbconn=require('./db');
const userRoute = require('./api/user_api.js');
const pasteRoute = require('./api/paste_api.js');

//setting up with Port
const PORT = process.env.PORT || 3001;

//Setting up with helmet
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action:'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());

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

//Api Endpoints looks like
//https://localhost:3001/auth/signup
app.use("/auth",userRoute);
app.use("/api",pasteRoute);

//handling 404 error
app.use('*',(req,res,next)=>{
  res.status(404).json('Sorry, Page Not Found');
  next();
})

//running listen event on server app
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
})