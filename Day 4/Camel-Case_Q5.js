// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
let test = "hello john doe"
let n = test.length
let res = ``
let i = 0

while(i<n){
    if(test[i]==" "){
        res+=test[i+1].toUpperCase();
        i=i+2 // skip the element
    }
    else {
    res+=test[i];
    i++;
    }
}
console.log(res)