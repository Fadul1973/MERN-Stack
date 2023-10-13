const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      require: true,
      unique: true,
      minlength: 3,
    },
  },
  {
    setTimeout: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
