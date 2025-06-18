// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.
const obj = {
    a:1,
    b:2,
    c:{
        d:3,
        e:4
    }
}

const CopyObject = JSON.parse(JSON.stringify(obj)) // deep copy method available in js but unfortuanlty it cant copy the functions and if we use operator like spread 

CopyObject.a = 8;

console.log(obj)
console.log(CopyObject)
