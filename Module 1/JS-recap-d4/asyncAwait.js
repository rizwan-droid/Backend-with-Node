/*
async await

async function name(){
task - time consuming
}
 */

async function fun() {
  setTimeout(() => {
    console.log("some more time taking element");
  }, 3000);
  setTimeout(() => {
    console.log("time taking element");
  }, 2000);

  let bolbData = await fetch("https://randomuser.me/api/");
  let actualData = await bolbData.json();

  console.log(actualData);
}

fun();
