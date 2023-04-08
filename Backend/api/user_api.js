const express = require("express");
const {
  validateUser,
  validateUserLogin,
} = require("../middleware/input_sanitization");
const {
  userSignup,
  userLogin,
  emailVerify,
} = require("../controller/user_controller");
const userRoute = express.Router();

userRoute.post("/signup", validateUser, userSignup);
userRoute.post("/login", validateUserLogin, userLogin);
userRoute.get("/:user/verify/:id", emailVerify);

module.exports = userRoute;
