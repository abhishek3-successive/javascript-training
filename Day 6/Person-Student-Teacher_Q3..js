// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
class person{
    constructor(name , age , gender , interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }
    greeting(){
        console.log(`Hii my name is ${this.name} and my age is ${this.age} & I have a keen interest in ${this.interests}`)
    }
    farewell(){
        console.log("goodbye")
    }
}

// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
class Student extends person{
    constructor( name , age , gender , interests,study){
        super(name , age , gender , interests) // initize the base class
        this.study = study
    }
    greeting(){
        console.log(`Hii my name is ${this.name} and my age is ${this.age} & I have a keen interest in ${this.interests} and i study ${this.study}`)
    }
}

// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Teacher extends person{
    constructor(name , age , gender , interests , subjectsTaught ){
        super(name , age , gender , interests)
        this.subjectsTaught = subjectsTaught
    }
    farewell(){
        console.log(`Teacher taught the subject ${this.subjectsTaught}`)
    }
}
// objects

let p1 = new person("Goku",23,"M","Gym with CS")
let p2 = new Student("Goku",23,"M","Gym with CS","Maths")
let p3 = new Teacher("Goku",23,"M","Gym with CS","computerScience")
p1.greeting();
p1.farewell();
p2.greeting();
p3.farewell();