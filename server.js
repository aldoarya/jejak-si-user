const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();
const dotenv = require("dotenv");
const db = require("./models");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

app.use(cors());

connectDB();

// parse requests of content-type - application/json
app.use(express.json({ limit: "4mb" }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ limit: "4mb", extended: true, parameterLimit: 50000 })
);
app.use(
  cookieSession({
    name: "fundwise-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
  })
);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Fundwise Backend Application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Add Routes
require("./routes/auth.routes")(app);
