const express = require("express");
const app = express();
const fileSystem = require("fs");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const date = new Date();
const finalDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

app.get("/create", function (req, res, next) {
  fileSystem.writeFile(
    `./Files/${finalDate}.txt`,
    "hello world",
    function (err) {
      if (err) {
        res.send("kuch fat gaya");
      } else {
        res.send("file ban gaya");
      }
    }
  );
});

app.get("/read", function (req, res) {
  fileSystem.readdir(`./files`, "utf-8", function (err, data) {
    if (err) {
      res.send("something went wrong");
    } else {
      console.log(data);
      res.render("index", { data });
    }
  });
});

app.get("/readFileData", function (req, res) {
  fileSystem.readFile(
    `./files/${req.params.finalDate}.txt`,
    "utf-8",
    function (err, data2) {
      if (err) {
        res.send("something wrong");
      } else {
        res.render("index2", { data2 });
      }
    }
  );
});

app.listen(3000);
