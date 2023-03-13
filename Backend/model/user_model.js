<<<<<<< HEAD
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      match: /.+\@.+\..+/,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true ,versionKey:false}
);

//hashing the password
/**
 * The purpose of this code is to ensure that the user's password is always hashed before it is saved to the database,
 * which adds an additional layer of security to the application by making it harder for an attacker to access user passwords
 * even if they manage to gain access to the database.
 */
UserSchema.pre("save", async function(next){
  //getting the current user object with the help of this
  const user = this;

  //Checking whether the password field is modified or not
  if (!user.isModified("password")) {
    return next();
  }

  //hashed the password with salt of 10 Rounds
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;

  next();
});

//comparing passwords by creating instace method
/**
 *  the isValidPassword function would be called when a user attempts to log in to the application.
 */
UserSchema.methods.isValidPassword = async function(password){
    const user = this;
    const compare = await bcrypt.compare(user.password,password);
    return compare;
}

//database indexing
UserSchema.index({username:1 , email:1});

module.exports = mongoose.model("User_Model", UserSchema);
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        match: /.+\@.+\..+/,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:8
    }
},{timestamps:true});

module.exports = mongoose.model('User_Model',UserSchema);

>>>>>>> 3915391f59cfccc39dd3804737742f6a66a8618f
