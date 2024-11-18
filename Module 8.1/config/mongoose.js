const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ahamadrizwan320:rizwan123@cluster0.9yip1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(function () {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("test error");

    console.log(err);
  });

const db = mongoose.connection;

module.exports = db;
