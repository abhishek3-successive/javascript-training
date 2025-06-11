// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

let arr = [{name : "John", age : 22, id : 1},
    {name : "Goku", age : 33 , id : 2},
    {name : "vegeta", age : 34 , id : 3},
    {name : 'xyz', age : 12, id: 4}
]

arr.forEach((keys) => 
    console.log(delete keys.id))

arr.forEach((key)=> 
 console.log(key)
)

// Output 

// abhishek.gupta1@abhishekguptass-454:~/Javascript-training$ node "/home/abhishek.gupta1/Javascript-training/Day 5/remove-id_Q3.js"
// true
// true
// true
// true
// { name: 'John', age: 22 }
// { name: 'Goku', age: 33 }
// { name: 'vegeta', age: 34 }
// { name: 'xyz', age: 12 }
// abhishek.gupta1@abhishekguptass-454:~/Javascript-training$ 