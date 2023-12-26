const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
  },
  mobileNumber: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
