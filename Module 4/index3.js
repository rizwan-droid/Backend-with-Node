const express = require("express");
const server = express();
const flash = require("connect-flash");

server.use(flash());

server.get("/", function (req, res, next) {
  res.send("server started");
});

server.get("/users", function (req, res, next) {
  req.flash("error", "invalid credential");
  res.redirect("/contact");
  res.send("users data found flash");
});

server.get("/contact", function (req, res, next) {
  console.log("working");
  res.send("flash contact");
  res.send(req.flash.error);
});

server.listen(2000);
