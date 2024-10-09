/*
step1 - dice server connection request
step2 - dice server connected
step3 - few course get
step4 - few more courses get
step5 - enroll among them in one course
 */

// function connectToDiceServer() {
//   console.log("connecting");
//   setTimeout(() => {
//     console.log("connected now you can enjoy services of dice");
//   }, 2000);
// }

// function getCourses() {
//   setTimeout(() => {
//     console.log("fetching courses from dice server");
//   }, 1000);
// }

// connectToDiceServer();
// getCourses();

function connectToDiceServer(callbackFunc) {
  console.log("connecting ...");
  setTimeout(() => {
    console.log("connected!!!");
    callbackFunc();
  }, 2000);
}

function getFewCourses(anotherCallbackFunc) {
  setTimeout(() => {
    console.log("fetching few courses from dice");
    anotherCallbackFunc();
  }, 1000);
}

connectToDiceServer(() => {
  getFewCourses(() => {
    console.log("web-dev, ui-ux, react, mongodb");
  });
});
