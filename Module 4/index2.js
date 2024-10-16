const express = require("express");
const server = express();
const eSession = require("express-session");
const cookieParser = require("cookie-parser");

server.use(
  eSession({
    secret: "some key",
    resave: false,
    saveUninitialized: false,
  })
);

server.use(cookieParser());

server.get("/", function (req, res, next) {
  res.cookie("name", "rizwan");
  res.send("server started");
});

server.get("/admin", function (req, res) {
  res.send("server chalu hogaya");
  console.log(req.cookies.name);
});

server.get("/user", function (req, res, next) {
  // eSession.Session.rizwan = true;
  req.session.rizwan = "dice";
  res.send("user data");
  // next();
});

server.get("/create", function (req, res, next) {
  // console.log(eSession.Session.rizwan);
  console.log(req.session.rizwan);

  res.send("something created by rizwan");
});

server.get("/admin/user", function (req, res, next) {
  res.send("some users data from admin page");
});

server.get("*", function (req, res, next) {
  res.send("no data found");
});

server.listen(3000);
