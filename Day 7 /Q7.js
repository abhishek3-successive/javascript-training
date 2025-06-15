// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) resolve("Promise1 sucess");
    else reject("rejected");
  }, 1000);
})
// .catch((err) => console.log(err));

let promise2 = async () => {
  const getUserData = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).json();
  //  const data = await response.json   // we can also do this method 
  return getUserData;
};

let promise3 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("successful");
  } else {
    reject("Rejected");
  }
})
// .catch((error) => console.log("error"));

async function implementPromises() {
  try {
    const promise = await Promise.all([promise1, promise2, promise3]);
    console.log(`All promise have been sussessfully run`);
    console.log(promise)
  } catch (error) {
    console.log("error");
  }
}

implementPromises();
