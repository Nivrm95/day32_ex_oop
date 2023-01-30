//ex1
  //a
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    let result = this.sides * this.sideLength;
    console.log(result);
  }
}

let square = new Shape('square', 4, 5);
console.log(square.calcPerimeter());

let triangle = new Shape('triangle', 3, 3);
console.log(triangle.calcPerimeter());


//2
//a
class Circle {
	static PI = 3.14;
	constructor(radius) {
		this.radius = radius;
	}
	area() {
		return Circle.PI * this.radius ** 2;
	}
}

//b
class Account {
	constructor(balance, owner) {
		this.balance = balance;
		this.owner = owner;
	}
	static create(owner) {
		return new Account(0, owner);
	}
}

//3
//a
class Person {
	constructor(name) {
		this.name = name;
	}
	uppercase() {
		return this.name.toUpperCase();
	}
}

//2
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
  price() {
		let newPrice = (this.price = Math.round(price * 100) / 100);
		return newPrice;
	}
}
