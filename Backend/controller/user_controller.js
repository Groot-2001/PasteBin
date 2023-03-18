const jwt = require("jsonwebtoken");
const UserModel = require("../model/user_model");
const bcrypt = require("bcrypt");
require("dotenv").config();

//sign up logic for users
const userSignup = async (req, res) => {
  //get the data from request body
  const { username, email, name, password } = req.body;

  //all field should be filled
  if (!username || !email || !name || !password) {
    return res.status(400).json({
      message: "Please fill the all required fields",
    });
  }

  try {
    /**
         *validation for these added
          - If username already exists.
          - If email already has been used.
          - If username meets certain criteria of length
    */

    // find the username and email from the database 
    const Isusername = await UserModel.findOne({ username });
    const Isemail = await UserModel.findOne({ email });

    //If username and email already exists.
    if (Isusername || Isemail) {
      return res.status(400).json({
        message: "This Username or emailId already has been used!, please try with different username or emailId.",
      });
    }

    //If username exceeds 15 characters
    if(username.length > 15){
        return res.status(400).json({
            message:"Username must have atmost 15 characters."
        })
    }

    //creating the instance of model and saving the data in db
    const user = await UserModel.create({
      username,
      email,
      name,
      password,
    });

    res.status(201).json({
      message: "user created successfully!",
      user,
    });
  } catch (error) {
    //incase any error generated from server side
    return res.status(500).json(error.message);
  }
};

const userLogin = async (req, res) => {
  //get the data from request body
  const { email,username, password } = req.body;

  try {
    //find the user in db
    const Isusername = await UserModel.findOne({ username });
    const Isemail = await UserModel.findOne({ email });

    //If user has already exist
    if (!Isusername & !Isemail){
      return res.status(404).json({
        message: "Username or email not found!, please register first.",
      });
    }

    //comparing the password if its correct or not
    const validateUser = await bcrypt.compare(password, Isusername?Isusername.password:Isemail.password);

    //if password is doesn't match with existed one
    if (!validateUser) {
      return res.status(401).json({
        message: "Incorrect Password",
      });
    }

    //take identity of a user
    const userId = {
      username: Isusername?Isusername.username:Isemail.username,
      email: Isusername?Isusername.email:Isemail.email,
    };

    //generate token of authenticated user
    const token = jwt.sign(userId,process.env.SECRET_TOKEN);

    return res.status(200).json({
      message: "Logged In Successfully!",
      token,
    });
  } catch (error) {
    //incase any error generated from server side
    return res.status(500).json(error.message);
  }
};

module.exports = { userSignup, userLogin };
