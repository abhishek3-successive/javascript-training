let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) resolve("Promise1 sucess");
    else reject("rejected");
  }, 1000);
}).catch((err) => console.log(err));

let promise3 = async () => {
  const getUserData = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return getUserData;
};

let promise2 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("successful");
  } else {
    reject("Rejected");
  }
});

async function implementPromises() {
  try {
    const promise = await Promise.all([promise1, promise2, promise3()]);
    console.log(`All promise have been sussessfully run`);
    // console.log(promise)
  } catch (error) {
    console.log("error");
  }
}

implementPromises();