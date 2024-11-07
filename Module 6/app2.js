const express = require("express");
const app = express();

//middlewares app.use(ejs) - sabse upar rakhna hai

//error handling - app crash , functionality dikkat aagai (req, res cycle) - error hanler ko sabse niche rakhna hai

app.get("/home", function (req, res, next) {
  res.send("server chalu");
});

app.get("/admin", function (req, res, next) {
  res.send("admin section");
  //   next(err);
});

app.get("/profile", function (req, res, next) {
  try {
    res.sennd("profile section");
  } catch (error) {
    next(error);
  }
  //   res.send("profile section");
});

app.get("*", function (req, res, next) {
  res.send("no page found");
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(5000);
