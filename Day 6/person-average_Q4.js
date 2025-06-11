// Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// // Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.
class person{
    constructor(firstname , lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    fullname(){
        console.log(`The person full name is ${this.firstname} ${this.lastname}`)
        // console.log("The person full name is :" + this.firstname + this.lastname )
    }
    average(){
        console.log(``)
    }
}

const p1 = new person("GG", "goku", 5)
p1.fullname();