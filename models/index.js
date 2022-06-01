const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.userAccount = require("./account.model")
db.tracker = require("./tracking.model")
db.refreshToken = require("./refreshToken.model");
module.exports = db;