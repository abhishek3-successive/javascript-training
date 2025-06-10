// 10. Write a program to concatenate an input of array of arrays
const arr1 = [1, 2, [3, 4]];
const arr2 = [[5, 6], 7, 8];

const arr3 = arr1.concat(arr2); 
const str = arr3.toString(arr3) // internally calls .join function
const res = str.split()
console.log(res)