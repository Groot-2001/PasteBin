const express = require("express");
const { pasteCreate, pasteDelete } = require("../controller/paste_controller");
const userAuthenticate = require("../middleware/user_authentication");
const pasteRoute = express.Router();
const {
  validatePaste,
  validatePasteDelete,
} = require("../middleware/input_sanitization");

pasteRoute.post("/create_paste", validatePaste, userAuthenticate, pasteCreate);
pasteRoute.delete(
  "/delete_paste/:_id",
  validatePasteDelete,
  userAuthenticate,
  pasteDelete
);

module.exports = pasteRoute;
