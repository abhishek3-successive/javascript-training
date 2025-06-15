// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.
const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";

let promise1 = async () => {
  const getData1 = (await fetch(url1)).json();  // .json is parsing the raw data into json
  return getData1;
};

let promise2 = async () => {
  const getData2 = (await fetch(url2)).json();
  return getData2;
};

let promise3 = async () => {
  const getData2 = (await fetch(url3)).json();
  return getData2;
};

async function operationOnAPIs() {
  try {
    const [first, second, third] = await Promise.all([
      promise1(),
      promise2(),
      promise3(),
    ]);

    const combined = {
      firstID: first.id,
      secondId: second.id,
      thirdID: third.id,
    };

    console.log("Combined Data:", combined);
  } catch (error) {
    console.log(error);
  }
}

// console.log(operationOnAPIs());
operationOnAPIs();