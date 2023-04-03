const express = require("express");
const bodyParser = require("body-parser");
const { pasteCreate, pasteDelete } = require("../controller/paste_controller");
const userAuthenticate = require("../middleware/user_authentication");
const pasteRoute = express.Router();

/**
 * Controls the maximum request body size of 10mb.
 */
const config = bodyParser.json({ limit: "10mb" });

const {
  validatePaste,
  validatePasteDelete,
} = require("../middleware/input_sanitization");

pasteRoute.post(
  "/create_paste",
  config,
  validatePaste,
  userAuthenticate,
  pasteCreate
);
pasteRoute.delete(
  "/delete_paste/:_id",
  validatePasteDelete,
  userAuthenticate,
  pasteDelete
);

module.exports = pasteRoute;
