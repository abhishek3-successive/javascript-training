// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

// Function that returns a Promise resolved or rejected after a delay
const createDelayedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false; // Set to true to simulate error
            if (!error) {
                resolve("✅ Success: Yes, sir");
            } else {
                reject("❌ Error: Something went wrong");
            }
        }, 1000); // Delay of 1 second
    });
};

// Async function using await to handle the promise
const handleAsyncOperation = async () => {
    try {
        const result = await createDelayedPromise();
        console.log(result);
    } catch (err) {
        console.error(err);
    }
};

// Run the async function
handleAsyncOperation();
