const express = require('express')
const app = express()
const status = require("./controller/get_status");
const PORT = 3001;
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers: Content-Type, Custom-Header");
  next();
});

app.get('/', status);


app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
})