const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const ExpressApp = express();
const cors = require("cors");

ExpressApp.use(express.json());
ExpressApp.use(express.urlencoded({ extended: true }));

const connectDB = require("./db/db");
const userRoutes = require("./routes/user.routes");

ExpressApp.use(cors());
connectDB();

ExpressApp.use("/user", userRoutes);

ExpressApp.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = ExpressApp;
