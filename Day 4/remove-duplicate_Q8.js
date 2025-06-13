// 8. Write a program to remove dupliacte elements from an array
var arr = [3,4,3,4,3]
var res = []
for(let i = 0 ; i<arr.length; i++){
   if(!res.includes(arr[i])){
    res.push(arr[i])
   }
}
console.log(res)