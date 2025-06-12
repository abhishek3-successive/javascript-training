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
    constructor(rectWidth, rectHeight) {
        super(rectWidth, rectHeight); // Using super to initialize the base class
        this.rectWidth = rectWidth;  // Rename width to rectWidth for Rectangle
        this.rectHeight = rectHeight; // Rename height to rectHeight for Rectangle
    }

    getArea() {
        console.log(`Area of Rectangle: ${this.rectWidth * this.rectHeight}`);
    }
}

class Triangle extends Shape {
    constructor(triWidth, triHeight) {
        super(triWidth, triHeight); // Using super to initialize the base class
        this.triWidth = triWidth;   // Rename width to triWidth for Triangle
        this.triHeight = triHeight; // Rename height to triHeight for Triangle
    }

    getArea() {
        console.log(`Area of Triangle: ${0.5 * this.triWidth * this.triHeight}`);
    }
}

let A = new Shape(15, 60);
let B = new Triangle(15, 60);
let C = new Rectangle(15, 60);

A.getArea();
B.getArea();
C.getArea();