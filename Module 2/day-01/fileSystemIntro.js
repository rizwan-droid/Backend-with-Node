const filesystem = require("fs");

//write file
// filesystem.writeFile("file ka naam", "option", "callbacks");
// filesystem.writeFile("abc.txt", "hey i am learning backend", function (err) {
//   if (err) {
//     console.log("some error", err);
//   } else {
//     console.log("file created successfully");
//   }
// });

//read file
// filesystem.readFile("abc.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log("some error", err);
//   } else {
//     console.log(data);
//   }
// });

//append
// filesystem.appendFile("abc.txt", "hello dice", function (err, data) {
//   if (err) {
//     console.log("some error");
//   } else {
//     console.log("data appended", data);
//   }
// });

//delete file
// filesystem.unlink("abc.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file delete successfully");
//   }
// });

//rename file
// filesystem.rename("abc.txt", "xyz.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file renamed successfully");
//   }
// });

// filesystem.readFile("xyz.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// new folder create
// filesystem.mkdir("./newFolder", { recursive: true }, (err) => {
//   if (err) throw err;
// });

// new folder rename
// filesystem.rename("./newFolder", "./renameFolder", (err) => {
//   if (err) throw err;
// });

// file content update
filesystem.writeFile("xyz.txt", "replaced content", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("content replaced");
  }
});
