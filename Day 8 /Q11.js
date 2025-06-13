// var promise = new Promise(function(resolve, reject) {
//    setTimeout(function() { resolve("Data received"); }, 1000); 
// });
// promise.then(function(data) {
//    console.log(data);
// }, function(error) {
//    console.log(error);
// });

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error=true;                        // fix error handling 
    if(!error)
    {
    resolve("Data received");
    }
   else{
        reject("Error",error)
    }
  }, 1000);
});
promise.then(
  function (data) {
    console.log(data);
  },
  
);
promise.catch(function(error){  // should have catch function to catch error
    console.log(error);
}
);
  