// localStorage.setItem("name", "bikund");
// localStorage.setItem("email", "abc@gmail.com");

// // Get a value from localStorage
// const name = localStorage.getItem("name");
// console.log(name); // Output: "value"

// const email = localStorage.getItem("email");
// console.log(email)

// // Remove a value from localStorage
// localStorage.removeItem("name");


// // Clear all values from localStorage
// localStorage.clear();


const userObj = {
    name: "bikund",
    email: "abc@gmail.com"
}

localStorage.setItem("user", JSON.stringify(userObj));

//  Get 
const storedUserData = localStorage.getItem("user");

if (storedUserData) {
    const userData = JSON.parse(storedUserData)
    console.log(userData);
    
} else {
    console.log("User data is not found in local storage");
    
}