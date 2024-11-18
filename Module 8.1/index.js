const express = require("express");
const app = express();
const mongoose = require("./config/mongoose");
const User = require("./models/userSchema");

app.get("/", (req, res) => {
  res.send("testing");
});

app.get("/create", async (req, res) => {
  // res.send("testing create route");
  let createUser = await User.create({
    name: "rizwan",
    email: "rizwan.com",
    password: "hello",
    age: "24",
  });
  console.log("new user created", createUser);
  res.send("done");
});

app.get("/read", async (req, res) => {
  // res.send("testing read route");
  let rv = await User.find({ name: "rizwan" });
  console.log("-------", rv);
  res.send(rv);
});

app.get("/readsingle", async (req, res) => {
  // res.send("testing read route");
  let rvsingle = await User.findOne({ name: "rizwan" });
  console.log("-------", rvsingle);
  res.send(rvsingle);
});

app.get("/update", async (req, res) => {
  // res.send("testing read route");
  let rvupdate = await User.findOneAndUpdate(
    { name: "rizwan" },
    { name: "rizwansir" },
    { new: true }
  );
  console.log("-------", rvupdate);
  res.send(rvupdate);
});

app.get("/delete", async (req, res) => {
  // res.send("testing read route");
  let rvdelete = await User.findOneAndDelete({ name: "rizwansir" });
  console.log("-------", rvdelete);
  res.send(rvdelete);
});

app.listen(3000);
