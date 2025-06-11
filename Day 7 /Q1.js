// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)
    function fetchP(cb){
        const url = " https://jsonplaceholder.typicode.com/todos/1"

                setTimeout(() =>{
                    fetch(url)
                    .then(response =>response.json())
                    .then(data =>{
                        cb(data);
                    })
                    .catch(error =>{
                      
                        cb(error);
                    });
                }, 1000);
                }


          
        function callback(data){
            console.log(data)
        }
fetchP(callback)