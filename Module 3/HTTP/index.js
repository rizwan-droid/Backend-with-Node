const h = require("http");

// console.log(h);
//server create

const server = h.createServer(function (req, res) {
  console.log("---------------");
  if (req.url === "/") {
    console.log("server chalu hai");
  } else if (req.url === "/admin") {
    console.log("admin page");
  } else if (req.url === "/user") {
    console.log("user data");
  } else {
    console.log("page not found");
  }

  //   res.end("rizwan ahamad update karliya firse update karliya");
});
// console.log("server run");

server.listen(1111);

//npm i nodemon
// npx nodemon index.js
// node modules aur package.json hona jaruri hai
//file system aur http dono me jaruri hota hai
