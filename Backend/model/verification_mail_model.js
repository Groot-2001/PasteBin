const mongoose = require("mongoose");

const mail_verificationSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      require: true,
      unique: true,
    },
    verification_id: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      expires: 48 * 3600, //48 hours
    },
  },
  { versionKey: false }
);

//indexing the verification timestamp
mail_verificationSchema.index({ createdAt: 1 });

module.exports = mongoose.model("mail_verify", mail_verificationSchema);
