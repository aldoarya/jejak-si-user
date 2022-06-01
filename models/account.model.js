const mongoose = require("mongoose");
const UserAccount = mongoose.model(
  "UserAccount",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  })
);
module.exports = UserAccount;