const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, require: true },
    description: { type: String, require: true },
    duration: { type: Number, require: true },
    date: { type: Date, require: true },
  },
  {
    setTimeout: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
