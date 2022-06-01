const db = require("../models");

const connectDB = () => {
  db.mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Successfully connect to ${conn.connection.host}.`);
    })
    .catch((err) => {
      console.error("Connection error", err);
      process.exit();
    });
};

module.exports = connectDB;
