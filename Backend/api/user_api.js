const express = require("express");
const {
  validateUser,
  validateUserLogin,
  validateAccountDeletion,
} = require("../middleware/input_sanitization");
const {
  userSignup,
  userLogin,
  emailVerify,
  accountDelete,
} = require("../controller/user_controller");
const userAuthenticate = require("../middleware/user_authentication");
const userRoute = express.Router();

userRoute.post("/signup", validateUser, userSignup);
userRoute.post("/login", validateUserLogin, userLogin);
userRoute.get("/:user/verify/:id", emailVerify);
userRoute.delete(
  "/accountDelete",
  userAuthenticate,
  validateAccountDeletion,
  accountDelete
);

module.exports = userRoute;
