/**
 method over loading and method over riding
 method overloading -
 method - function - object.class.function

 method
  area(l,b,h){
  return l*b //area
  return l*b*h //volume
  }
 */
//method overloading - js do not support
class Area {
  constructor() {}
  area(l, b) {
    return l * b;
  }

  area(l, b, h) {
    return l * b * h;
  }
}

let obj1 = new Area();
console.log(obj1.area(2, 6));

//method over riding

class A {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class B extends A {
  constructor(x, y, z) {
    super();
    this.x = 100;
  }
}
let objB = new B(10, 20, 30);
console.log(objB);
