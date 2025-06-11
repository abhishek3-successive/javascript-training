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
    static average(arr){
        let sum = 0
        arr.forEach(per=> {
            if(per>0){
            sum+=Math.ceil(per.age/arr.length)-1
            }
            else{
                console.log(`pls enter more than 0`)
            }
        });
        console.log(`Average age = ${sum}`)
    }
}

const p1 = new person("GG", "goku", 10)
const p2 = new person("GG", "goku", 68)
const p3 = new person("GG", "goku", 56)
p1.fullname();
person.average([p1,p2,p3])