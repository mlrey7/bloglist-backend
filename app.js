const express = require("express");
const app = express();
const cors = require("cors");
const blogRouter = require("./controllers/blog");
const mongoose = require("mongoose");
const config = require("./utils/config");

mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRouter);

module.exports = app;
