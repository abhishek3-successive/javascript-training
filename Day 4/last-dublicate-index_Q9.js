// 9. Write a program to find the last duplicate index in an array
var arr = [3,3,3,35,5,4,4,3]


for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
if(arr[i]==arr[j]){
        console.log("key has  "+ i + "value=" + arr[i])

    }
}
}