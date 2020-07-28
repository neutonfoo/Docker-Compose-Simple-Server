const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/value", (req, res) => {
  res.send("Text loaded from backend!");
});

app.listen(5000, err => {
  console.log("Listening");
});
