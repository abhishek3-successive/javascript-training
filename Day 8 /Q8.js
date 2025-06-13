//  function Person(name, age) { this.name = name; this.age = age; }
// Person.prototype.getDetails = function() {
//    console.log(this.name + " is " + this.age + " years old");
// };
// var person = new Person("John Doe", 30);
// delete person.name;
// person.getDetails();

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getDetails = function () {
  console.log(this.name + " is " + this.age + " years old");
};
var person = new Person("John Doe", 30);
// delete person.name; // this statement limit the function to print name as it delete the person name
person.getDetails();
