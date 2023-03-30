const express = require("express");
const { validateUser,validateUserLogin } = require("../middleware/input_sanitization");
const { userSignup, userLogin } = require("../controller/user_controller");
const userRoute = express.Router();

userRoute.post("/signup", validateUser, userSignup);
userRoute.post("/login", validateUserLogin, userLogin);

module.exports = userRoute;
