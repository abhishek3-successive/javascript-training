// 2. Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let a = 5;
const numtri = (a)=>{
for(var row = 1; row<=a; row++){
    let pattern = " ";
    for(var col = 1 ; col<=row; col++){
        pattern+=row+" ";
    }
    console.log(pattern );
}
}

console.log(numtri(a));
// output
//  1 
//  2 2 
//  3 3 3 
//  4 4 4 4 

const simpleTriangle = (a)=>{
for(var row = 1; row<=a; row++){
    let pattern = " ";
    for(var col = 1 ; col<=a-row+1; col++){
        pattern+=col + " ";
    }
    console.log(pattern );
}
}
simpleTriangle(a);
numtri(a);

// output 
//  1 2 3 4 5 
//  1 2 3 4 
//  1 2 3 
//  1 2 
//  1 
//  1 
//  2 2 
//  3 3 3 
//  4 4 4 4 
//  5 5 5 5 5 

const newtri = (a)=>{
    let val = 1
for(var row = 1; row<=a; row++){
    let pattern = " ";
    for(var col = 1 ; col<=row; col++){
        pattern+=val+" ";
        val++;
    }
    console.log(pattern );
}
}
console.log(newtri(a));
