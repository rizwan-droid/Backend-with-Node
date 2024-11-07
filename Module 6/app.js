const express = require("express");
const app = express();

app.get("/home", function (req, res, next) {
  res.send("server started");
});

app.post("/contact", function (req, res, next) {
  res.send("some data for conatct page");
});

app.put("/about", function (req, res, next) {
  res.send("some data for about page");
});

app.patch("/profile", function (req, res, next) {
  res.send("some data for profile page");
});

app.get("*", function (req, res, next) {
  res.send("no page found");
});

app.listen(4000);
