// Convert a callback-based API to a Promise-based API 
// (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

// Function that returns a promise and simulates async data fetching
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = null;
            const data = "Sample fetched data"; // Added sample data for realism

            if (error) {
                reject("❌ Error: Something went wrong.");
            } else {
                resolve(data);
            }
        }, 2000);
    });
};

// Calling the function using .then and .catch
fetchData()
    .then(data => {
        console.log("✅ Success:", data);
    })
    .catch(error => {
        console.error("🚫 Error:", error);
    });
