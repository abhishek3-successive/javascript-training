// 2. Give an example of using multiple callback functions in a single function in JavaScript
function greet (name , sucess , error){
 if(name){
    sucess(name)
 }
 else{
    error()
 }
}

function sucess(name){
    console.log(`hello ${name}`)
}

function error(){
    console.log(`!Error`)
}

greet("GG", sucess, error)
greet("", sucess , error)