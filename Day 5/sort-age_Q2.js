// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

let arr = [{name : "John", age : 22},
    {name : "Goku", age : 33},
    {name : "vegeta", age : 34},
    {name : 'xyz', age : 12}
]
// using arr.sort function to sort the array 
console.log(arr.sort((a,b)=> a.age - b.age))