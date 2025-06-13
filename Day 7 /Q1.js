// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)
    function fetchP(cb){
        const url = " https://jsonplaceholder.typicode.com/todos/1" // url

                setTimeout(() =>{   // async operation
                    fetch(url)
                    .then(response =>response.json())  // parse the raw data into json javascript objects
                    .then((data )=>{  // if .then promise is resolved then it come here
                        cb(data.title); // for accessing a particular value from url 
                    })
                    .catch(error =>{ // if promise is rejected then here
                      
                        cb(error);
                    });
                }, 1000);
                }


          
        function callback(data){ // callback function
            console.log(data)
        }
fetchP(callback)