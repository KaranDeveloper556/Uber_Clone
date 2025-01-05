const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const ExpressApp = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')
const connectDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes")

connectDB();
ExpressApp.use(express.json());
ExpressApp.use(express.urlencoded({ extended: true }));
ExpressApp.use(cookieParser())
ExpressApp.use(cors());


ExpressApp.get("/", (req, res) => {
    res.send("Hello World");
});

ExpressApp.use("/user", userRoutes);
ExpressApp.use("/captain", captainRoutes);

module.exports = ExpressApp;
