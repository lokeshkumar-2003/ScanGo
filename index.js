const express = require("express");
const app = express();
const cors = require("cors");
const DBConnection = require("./config/dbConfig");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.listen(() => {
  DBConnection();
});
