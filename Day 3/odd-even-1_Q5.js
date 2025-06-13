// 5. Write a program to print all even number first and then all odd numbers using only one iteration
let odd = [];
let even = [];
var n = 10;
for(let i = 1; i<n ; i++){
if(i%2==0){
    even.push(i);
}
if(i%2==1){
    odd.push(i);
}

}

const res = even.concat(odd);

console.log(odd);
console.log(even);
console.log(res);

