//object
let Harry = {
  name: "harry",
  age: 40,
  married: true,
  saySi() {
    console.log("harry says hi to you");
  },
};

Harry.saySi();

//function
function add(n1, n2) {
  return n1 + n2;
}

let result = add(10, 15);
console.log(result);

//class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

let c1 = new Circle(5);

let c2 = new Circle(10);

console.log(c1.radius);
console.log(c1.getArea());
