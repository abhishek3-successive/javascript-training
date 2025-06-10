// 2. Write a function to take input(age, name, phone no.) from user and display it
var prompt = require('prompt-sync')(); // for taking values
const age = Number(prompt("Enter your age " + ":" )) // age it should be num 
const nam = prompt("Enter your name "+ ":" ) // it should be character
const phone = Number(prompt("Enter your phone "+ ":" )) // number  it should be 10 

console.log("age "+":"+age)
if(/^[A-Za-z]+$/.test(nam)){
    console.log("Name " + nam)
}
if(!/^\d{10}$/.test(phone)){
console.log("Phone no "+ ": "+phone)
}
