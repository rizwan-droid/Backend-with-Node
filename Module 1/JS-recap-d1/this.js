/*
this - bind
*/

let obj1 = {
  name: "rizwan",
  age: 24,
  salary: 10000,
};

// console.log(obj1.name);
// console.log(obj1["name"]);

//loop - for in
for (const keys in obj1) {
  console.log(keys, obj1[keys]);
}

/*
this keyword
case 1 - global - window object
console.log(this);

case 2 - object - 2 function - methods - parent function (es5) iske andar child(es5) - this in child gives window object

case 3 - object - 2 func - parent(es5) - iske andar child(es6) - this in child gives parent object

case 4 - object -  2 func -  parent(es6) - iske andar child(es5) - this in child gives window object

case 5 - object -  2 func -  parent(es6) - iske andar child(es6) - this in child gives parent object
*/
