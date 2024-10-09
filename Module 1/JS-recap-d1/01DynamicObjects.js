let emp1 = {
  name: "rizwan",
  age: 24,
  salary: 10000,
  occupation: "student",
  task: function () {
    console.log("study");
  },
  education: ["10th", "12th", "btech"],
  otherdetails: {
    isMarried: false,
    hometown: "deoria",
  },
};

//faculty,operation,student,office staff, admin
//function constructor

// console.log(emp1.__proto__);

function Employees(
  name,
  age,
  salary,
  education,
  occupation,
  task,
  otherdetails
) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.education = education;
  this.task = task;
  this.occupation = occupation;
  this.otherdetails = otherdetails;
}

let employee1 = new Employees(
  "vikas",
  24,
  10000,
  ["10th", "12th", "btech"],
  "student",
  function () {
    console.log("teaching");
  },
  { isMarried: false, hometown: "deoria" }
);

let employee2 = new Employees(
  "mahesh",
  24,
  10000,
  ["10th", "12th", "btech"],
  "student",
  function () {
    console.log("teaching");
  },
  { isMarried: false, hometown: "deoria" }
);
console.log(employee1);
console.log(employee2);
console.log(employee1 == employee2);
//means both are created in different address in ram
