// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.
// Promise 1: Simulates async task with setTimeout
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve("✅ Promise1: Success");
        } else {
            reject("❌ Promise1: Rejected");
        }
    }, 1000);
});

// Promise 2: Fetches data from API using async/await
const promise2 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json(); // Corrected way to parse JSON
        return data; // Resolves with fetched JSON object
    } catch (error) {
        throw "❌ Promise2: Fetch failed";
    }
};

// Promise 3: Immediately resolved or rejected based on condition
const promise3 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("✅ Promise3: Successful");
    } else {
        reject("❌ Promise3: Rejected");
    }
});

// Function to run all promises in parallel and handle result
const implementPromises = async () => {
    try {
        const results = await Promise.all([promise1, promise2(), promise3]); // Note: promise2 is a function
        console.log("🎉 All promises successfully resolved:");
        console.log(results);
    } catch (error) {
        console.error("🚫 Error occurred:", error);
    }
};

// Execute the function
implementPromises();
