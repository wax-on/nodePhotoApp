const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/index"));

module.exports = app;
