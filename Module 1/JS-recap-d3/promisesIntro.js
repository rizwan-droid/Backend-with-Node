let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise resolved after two second");
    resolve("promise resolved");
    reject("promise rejected");
  }, 2000);
});

promise.then(function (maal) {
  console.log(maal);
});

promise.catch(function (maal) {
  console.log(maal);
});
