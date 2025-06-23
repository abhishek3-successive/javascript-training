const flattenDepth = require('lodash/flattenDepth');
const { add, sub } = require('./maths/math');

let arr = [7, [-9, 8, 8], [78, 23, [0, -0]], 9, 89];

let flatarr = flattenDepth(arr, 2); // Correct usage of flattenDepth

let add1 = add(2, 4); // using math.js 
let sub1 = sub(5, 7); // using math.js

console.log(`Addition of two numbers is: ${add1}`);
console.log(`Subtraction of two numbers is: ${sub1}`);
console.log('Flattened array:', flatarr);
