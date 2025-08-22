// const userEmail = "abc@gmail.com";   true
// const userEmail = ["bikund kumar", "tushar"] // true
const userEmail = []; // true
// const userEmail = ""    // false

if (userEmail) {
  console.log(`Got user Email: ${userEmail}`);
} else {
  console.log(`Dont't have user email`);
}

// if (userEmail.length === 0) {
//     console.log("Array is empty");

// }

const emptyObj = {}

// const emptyObj = {
//   name: "bikund",
// };

if (Object.keys(emptyObj).length === 0) {
  // console.log("Object is empty");
  // console.log(`${emptyObj.name}`);
}




