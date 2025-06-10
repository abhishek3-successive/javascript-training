// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")
let str = 'hello world'



// console.log(str2[1].reverse())
console.log(str.split(" ")
.map(
  word => word.split('').reverse().join("")
).join(" ")
)

// Output 
// abhishek.gupta1@abhishekguptass-454:~/Javascript-training$ node "/home/abhishek.gupta1/Javascript-training/Day 4/reverse-string_Q2.js"
// [ 'hello', 'world' ]
// abhishek.gupta1@abhishekguptass-454:~/Javascript-training$ node "/home/abhishek.gupta1/Javascript-training/Day 4/reverse-string_Q2.js"
// [ 'olleh', 'dlrow' ]
// abhishek.gupta1@abhishekguptass-454:~/Javascript-training$ node "/home/abhishek.gupta1/Javascript-training/Day 4/reverse-string_Q2.js"
// olleh dlrow