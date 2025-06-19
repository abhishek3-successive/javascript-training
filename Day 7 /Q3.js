// Convert a callback-based API to a Promise-based API 
// (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function fetchData(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const error = null;
            const data = ""

            if(error){
                reject("Error")
            }
            else{
                resolve(data)
            }
        },2000)
    })
}

fetchData().then(data=>{console.log("Sucess",data)}).catch(error =>{
    console.log("Error",error)
})