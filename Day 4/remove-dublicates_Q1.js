// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")
var test = "Hello Yellow"
var res = ""
let n= test.length
var final = ""

for(let i = n-1 ; i>=0; i--){
     var isdupliacte = false;
    for(let j = i-1; j>=0;j--){
        if(test[i]==test[j]){
            isdupliacte = true
           break;
        }
        
    }
    if(isdupliacte==false){
    res+=test[i];
    }
}
for(let i = res.length-1; i>=0; i--){
    final+=res[i]
}

console.log(final)