const express = require('express');
const {pasteCreate,pasteDelete} = require('../controller/paste_controller');
const userAuthenticate = require('../middleware/user_authentication');
const pasteRoute = express.Router();

pasteRoute.post("/create_paste",userAuthenticate,pasteCreate);
pasteRoute.delete("/delete_paste/:_id",userAuthenticate,pasteDelete);

module.exports = pasteRoute;