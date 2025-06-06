// 12. Write a program to display intersection of two array
var arr = [4,4,4,4]
var arr2 = [3,4,45,5]
let res = []
for(let i = 0; i<arr2.length; i++){
    if(arr.includes(arr2[i])){
        res.push(arr2[i])
    }
}
console.log(res)
