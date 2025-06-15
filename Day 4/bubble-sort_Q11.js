// 11. Write a program to sort an array (bubble sort)
var arr = [8,9,5,89,90,100,60];
let n = arr.length


 for (var i =0; i<n; i++) {
        for (var j = 0; j< (n-i-1); j++) {

            if (arr[j] >arr[j+1]) {

                var temp =arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)