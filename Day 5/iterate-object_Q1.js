// 1. Write a program to iterate over object.
const obj = {
    name :"Goku",
    age : 23,
    location : "DragonBall Z"
};

for(let key in obj){
    console.log(obj[key])
}

const resultReduce = Object.entries(obj).reduce((acc, [key, value]) => { // .entries covert the obj into array in this example it convert like [[name , Goku], [age ,23],[location ,DBZ]
    console.log(value); // Process each value here
    acc.push(value);    // Accumulate the values in an array
    return acc;
}, []);

const resultMap = Object.entries(obj).map(([key, value]) => {
    console.log(value); // You can process each value here
    return value;
});


