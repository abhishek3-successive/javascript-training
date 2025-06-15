// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.
const promise1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve(`print : yes sir`)
        }
        else{
            reject('Error')
        }
    })
}, 1000)

async function promise2() {
    try {
        const response = await promise1
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
    
}
promise2()
