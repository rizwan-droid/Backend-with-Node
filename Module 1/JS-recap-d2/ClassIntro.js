/*
class - skeleton - blueprint - architecture - using this - makes new objects and instances - es6 mein aaya tha -  isse pehle function constructor use karte the

inheritance
*/

class Human {
  constructor(nol, noh, food, behaviour) {
    this.legs = nol;
    this.hands = noh;
    this.food = food;
    this.behaviour = behaviour;
  }
}

let human1 = new Human(2, 2, " non - veg", hones);
console.log(human1);

// class Animal {
//     constructor(nol, noh, food, behaviour) {
//       this.legs = nol;
//       this.hands = noh;
//       this.food = food;
//       this.behaviour = behaviour;
//     }
//   }

//   let animal1 = new Animal(2,2,veg,sleep);
//   console.log(animal1);

class Animal extends Human {
  constructor(nol, noh, food, behaviour) {
    super(2, 2, "veg", sleep);
    // this.legss = nol;
    // this.handss = noh;
    // this.foods = food;
    // this.behaviours = behaviour;
  }
}
let animal1 = new Animal(2, 2, "veg", sleep);
console.log(animal1);
