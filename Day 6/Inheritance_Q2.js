//  Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.
class Shape {
    constructor( width , height){
        this.width = width
        this.height = height
    }
    getArea(){
        console.log(`Area of shape : ${this.height*this.width}`)
    }
}

class Rectangle extends Shape{
    constructor( width , height){

        super()
        this.width = width
        this.height = height
    }
    getArea(){
        console.log(`Area of Rectangle : ${this.width * this.height}`)
    }
}

class Triangle extends Shape{
    constructor(width , height){
        super(width , height)
    }
    getArea(){
        console.log(`Area of Triangle : ${1/2*this.height*this.width}`)
    }
}

let A = new Shape(15,60)
let B = new Triangle(15,60)
let C = new Rectangle(15,60)
A.getArea()
B.getArea()
C.getArea()