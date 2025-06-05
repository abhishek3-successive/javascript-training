// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.
const check = ( num )=>{
if(num % 2==0){
    return true;
}
if(num % 2 == 1){
    return false;
}
}
console.log(check(3));