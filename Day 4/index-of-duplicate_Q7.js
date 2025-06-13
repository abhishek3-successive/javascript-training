// 7. Write a program to find index of duplicate elements in an array
var arr = [5,6,7,9,7,7]

// let i = 0;
// let j = i+1;
// while(i<arr.length){
//    if(arr[i]==arr[j]){
//         console.log("Index of duplicate is   "+ i )
//         i++;
//         j++;

//     } 
// }

for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
if(arr[i]==arr[j]){
        console.log("Index of duplicate is   "+ i )

    }
}
}