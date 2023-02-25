const express = require('express')
const app = express()
const status = require("./controller/get_status"); 

app.get('/',status);

app.listen(3001);