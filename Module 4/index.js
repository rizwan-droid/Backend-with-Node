// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const server = express();
const expressSession = require("express-session");

//syntax
/*
server - get - takes two things - routes - handler(middleware/function) - function takes two parameter(request,response)
 */
server.use(
  expressSession({
    secret: "some key",
    resave: false,
    saveUninitialized: false,
  })
);

server.use(function (req, res, next) {
  console.log("hello world");
  next();
});

server.get("/admin", function (req, res) {
  res.send("server chalu hogaya");
});

server.get("/edit", function (req, res) {
  res.send("edit data page");
});

server.get("/user", function (req, res) {
  res.send("user data");
});

server.get("/test", function (req, res, next) {
  res.send.rizwan = true;
  res.send("i am done");
});

server.get("*", function (req, res) {
  res.send("no page found");
});

server.listen(3000);

/*
syntax
middleware
suppose-browser(client)-get request- bich me kahi modify ya check karna chahte ho - use middleware 
middleware - pehchaan - function which takes 3 parameters(req,res,next)
 */

/*
cookies - data browser mein store hona
session  - data server mein store hona

package-express session
 */
