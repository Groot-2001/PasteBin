const express = require('express')
<<<<<<< HEAD
const helmet = require('helmet');
const app = express()
const status = require("./controller/get_status");
const {userLogin,userSignup} = require("./controller/user_controller");
=======
const app = express()
const status = require("./controller/get_status");
const PORT = 3001;
>>>>>>> 3915391f59cfccc39dd3804737742f6a66a8618f
require('dotenv').config()
const bodyParser = require('body-parser');
const dbconn=require('./db');

<<<<<<< HEAD
//setting up with Port
const PORT = process.env.PORT || 3001;

//database connection
dbconn();

//Setting up with helmet
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action:'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());

=======
//database connection
dbconn();

>>>>>>> 3915391f59cfccc39dd3804737742f6a66a8618f
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
<<<<<<< HEAD
app.post('/signup',userSignup);
app.post('/login',userLogin);
=======
>>>>>>> 3915391f59cfccc39dd3804737742f6a66a8618f

//running listen event on server app
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
})