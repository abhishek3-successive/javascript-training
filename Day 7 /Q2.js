// 2. Give an example of using multiple callback functions in a single function in JavaScript

// Greet function with success and error callbacks
const greet = (name, onSuccess, onError) => {
    if (name && name.trim() !== "") {
        onSuccess(name);
    } else {
        onError();
    }
};

// Success callback
const handleSuccess = (name) => {
    console.log(`Hello, ${name}!`);
};

// Error callback
const handleError = () => {
    console.error("⚠️ Error: Name is missing.");
};

// Calling the function with valid name
greet("GG", handleSuccess, handleError);

// Calling the function with empty name
greet("", handleSuccess, handleError);
