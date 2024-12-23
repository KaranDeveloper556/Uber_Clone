const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const ExpressApp = express();
const cors = require("cors");

ExpressApp.use(cors());

ExpressApp.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = ExpressApp;
