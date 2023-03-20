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
  //If username exceeds 8 characters
  if (username.length > 8) {
    return res.status(400).json({
      message: "Username must have atmost 8 characters.",
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
    const Isuser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    //If username and email already exists.
    if (Isuser.username || Isuser.email) {
      return res.status(400).json({
        message:
          "This Username or emailId already has been used!, please try with different username or emailId.",
      });
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
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  //get the data from request body
  const { email, username, password } = req.body;

  /** multiple cases to handle
   * C1: username + !email (valid)
   * C2: email + !username (valid)
   * C3: username + email (not valid)
   * C4: !username + !email (not valid)
   */

  try {
    if ((!!email && !!username) || (!email && !username)) {
      return res.status(400).json({
        message:"Should provide either email or username.",
        Note:"if both exists it's not a valid either!"
      })
    }
  
    if (!password) {
      return res.status(400).json({
        message:"Password is required."
      })
    }
    //find the user in db
    const user = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res.status(400).json({
        message: "Incorrect User Credentials",
      });
    }

    //If user has already exist
    if (!user.username || !user.email) {
      return res.status(404).json({
        message: "Username or email not found!, please register first.",
      });
    }

    //comparing the password if its correct or not
    const validateUser = await bcrypt.compare(password, user.password);

    //if password is doesn't match with existed one
    if (!validateUser) {
      return res.status(401).json({
        message: "Incorrect Password",
      });
    }

    //take identity of a user
    const userId = {
      username: user.username,
      email: user.email,
    };

    //generate token of authenticated user
    const token = jwt.sign(userId, process.env.SECRET_TOKEN);

    return res.status(200).json({
      message: "Logged In Successfully!",
      token,
    });
  } catch (error) {
    //incase any error generated from server side
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { userSignup, userLogin };
