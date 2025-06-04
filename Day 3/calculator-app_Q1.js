// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)
// import 
// normal function 


var prompt = require('prompt-sync')(); // for taking values


// Arrow function 
const add = (a,b)=> a+b;
const sub = (a , b)=> a-b;
const multiply = (a , b) => a*b;
const divide = (a , b)=> a/b;

// take a , b , operation
var a = prompt("Enter the first value");
var b = prompt("Enter the second value");
var ops = prompt("enter the operator");

switch(ops) {
  case "+": 
   console.log(add(a,b));
    break;
  case "-": 
    console.log(sub(a,b));
    break;
    case "*": 
    console.log(multiply(a,b));
    break;
    case "/":
        console.log(divide(a,b));
        break;
  default: 
  console.log("pls enter the correct value")
       
    
}