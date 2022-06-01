const db = require("../../models");
const UserAccount = db.userAccount;

// Function to Check Whether Duplicate Email is Exist
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Email
  UserAccount.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};
module.exports = verifySignUp;
