const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  numCorrectQs: { type: Number, default: 0 },
  numAnsweredQs: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", UserSchema);