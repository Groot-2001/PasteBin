const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const mail_verification = require("./verification_mail_model");
const send_email = require("../controller/send_email");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [8, "Username must have atmost 8 characters."],
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
    is_verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

//hashing the password
/**
 * The purpose of this code is to ensure that the user's password is always hashed before it is saved to the database,
 * which adds an additional layer of security to the application by making it harder for an attacker to access user passwords
 * even if they manage to gain access to the database.
 */
UserSchema.pre("save", async function (next) {
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

/**
 * This will execute after the user is gets saved in the database
 * this will ensure that email entered by user is verified
 */

UserSchema.post("save", async function (user, next) {
  const random_id = await bcrypt.genSalt(10);

  console.log(user);
  console.log(random_id);

  //verification
  const mail_verify = await new mail_verification({
    user: user.username,
    verification_id: random_id,
  }).save();

  const url = `${process.env.BASE_URL}auth/${mail_verify.user}/verify/${mail_verify.verification_id}`;
  await send_email(user.email, "Email Verification", url);

  console.dir({
    message: "An Email is sent to your account please verify.",
  });

  next();
});

//comparing passwords by creating instace method
/**
 *  the isValidPassword function would be called when a user attempts to log in to the application.
 */
UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(user.password, password);
  return compare;
};

//database indexing
UserSchema.index({ username: 1, email: 1, is_verify: 1 });

module.exports = mongoose.model("User_Model", UserSchema);
