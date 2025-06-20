class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        console.log(`Area of shape: ${this.height * this.width}`);
    }
}

class Rectangle extends Shape {
    constructor(width , height) {
        super(width, height); // Using super to initialize the base class
    }

    getArea() {
        console.log(`Area of Rectangle: ${this.width * this.height}`);
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height); // Using super to initialize the base class
    }

    getArea() {
        console.log(`Area of Triangle: ${0.5 * this.width * this.height}`);
    }
}

let A = new Shape(15, 60);
let B = new Triangle(15, 60);
let C = new Rectangle(15, 60);

A.getArea();
B.getArea();
C.getArea();