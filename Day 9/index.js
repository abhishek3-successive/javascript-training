const _ = require('lodash');
const  {add , sub} = require('./maths/math')
let arr = [7, [-9,8,8], [78,23,[0,-0]],9,89] 

let flatarr = _.flattenDepth(arr , 2) // flatten Depth flatten the array it take two argumnet a array and another one is the depth 

let add1  = add(2,4) // using math.js 
let sub1 = sub(5,7) // using math.js

console.log(`addition of two no is : ${add1}`)
console.log(`subtraction of two no is : ${sub1}`)
// flatarr 
console.log(flatarr)

