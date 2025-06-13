// 3. Write a function expression that takes in another function as an argument
const hello= (name, call)=>{
    console.log("hello", name)
    call()
}
const riya = ()=>{
     console.log("riya")
}
hello("john", riya)