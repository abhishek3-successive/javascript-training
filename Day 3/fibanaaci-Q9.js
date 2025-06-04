// 9. Write a program to print fibonaaci series
// const fibonaaci = function(n){
//     if(n<=1){
//         return n;
//     }
//     return fibonaaci(n-1)+fibonaaci(n-2)
// }
// fibonaaci(10);

var a = 0;
var b = 1;
console.log(a);
console.log(b);
for(var i= 3; i<20; i++){
    var c = a+b;
    console.log(c);
    a=b;
    b=c;
}