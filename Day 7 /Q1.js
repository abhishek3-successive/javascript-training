// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)
const fetchP = (cb) => {
    const url = "https://jsonplaceholder.typicode.com/todos/1"; 

    // Simulate delay using setTimeout
    setTimeout(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => cb(null, data.title)) // Call callback with null error and title
            .catch(error => cb(error, null));   // Call callback with error and null data
    }, 1000);
};

// Callback function that handles the result
const callback = (error, data) => {
    if (error) {
        console.error("Error fetching data:", error);
        return;
    }
    console.log("Fetched title:", data);
};

// Execute the async function
fetchP(callback);
