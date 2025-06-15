// 13. Write a program to return inverse of an array
const arr = [3,2,4,1]
// const res1 = arr.reverse(arr)
// console.log(res1)

let arr3 = new Array(arr.length).fill(0) // to avoid empty item condition

for(let i = 0; i< arr.length ; i++){
 arr3[arr[i]]= i;
}
console.log(arr3)