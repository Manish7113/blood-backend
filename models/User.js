const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new Schema({
  username: String,
  password: String,
  mobileNo: Number,
  gender: String,
  age: Number,
  email: String,
  bloodGroupTested: Boolean,
  bloodGroup: String,
  city: String,
  location: String,
  profession: String,
});
UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", UserSchema);

module.exports = User;
