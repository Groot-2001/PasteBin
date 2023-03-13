const jwt = require('jsonwebtoken');
const UserModel = require('../model/user_model');
const bcrypt = require('bcrypt');
require('dotenv').config();

//sign up logic for users
const userSignup = async (req,res)=>{
    //get the data from request body
    const {username,email,name,password} = req.body;

    console.log(username,email,name,password);

    //all field should be filled
    if(!username & !email & !name & !password){
        return res.status(400).send({
            message:"Please fill in the field"
        });
    }


    try {
        //creating the instance of model and saving the data in db
        const user = await UserModel.create({
            username,
            email,
            name,
            password
        });
        console.log(user);
        res.status(201).send({
            message:"user created successfully!",
            user
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }

}

const userLogin = async (req,res) =>{
    //get the data from request body
    const {email,password} = req.body;

    try {
        //find the user in db
        const user = await UserModel.findOne({email});

        //check whether the user exist or not
        if(!user){
            return res.status(400).send({
                message:"User not found!, please register first."
            });
        }

        //comparing the password if its correct or not
        const validateUser = await bcrypt.compare(password,user.password);

        //if password is doesnt match with existed one
        if(!validateUser){
            return res.status(400).send({
                message:"Incorrect Password"
            });
        }

        //take identity of a user
        const userId = {
            id:user._id,
            email:user.email
        }

        //generate token of authenticated user
        const token = jwt.sign(userId,process.env.SECRET_TOKEN,{
            expiresIn:"1h"
        });

        return res.status(200).send({
            message:"Logged In Successfully!",
            token
        });

    } catch (error) {
        return res.status(400).send(error.message);
    }
}

module.exports = {userSignup,userLogin};

