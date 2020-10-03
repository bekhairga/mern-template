const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    `mongodb+srv://Klaun:7408449da7@eshop.omtek.mongodb.net/eshop?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000);
