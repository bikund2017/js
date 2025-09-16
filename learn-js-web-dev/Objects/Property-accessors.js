// There are two ways of setting, altering, and accessing the properties of an object: dot notation and bracket notation.

// Dot notation

// const myObj = {
//     "myProp" : "String value."
// };

// console.log(myObj.myProp);

// const myObj = {};

// myObj.myprop = "String value."

// console.log(myObj);


// const myObj = {
//     myprop: {
//         childProp : true
//     }
// };

// console.log(myObj.myprop.childProp);

// const myObj = {
//     "myProp" : {
//         "childProp" : true
//     }
// };

// console.log(myObj.myMissingProp);
// console.log(myObj.myMissingProp.childProp);

// const myObj = {
//     "myProp": {
//             "childProp" : true
//     }
// };

// myObj.myProp.myMissingProp =  "Missing";

// console.log(myObj.myProp.myMissingProp);

// console.log(myObj);

// console.log(myObj.myProp.childProp);

// const myObj = {
//     myProp: {
//         "childProp": true
//     }
// };

// console.log(myObj.myMissingProp?.childProp);

// const myObj = {
//     "1": true,
//     name: "Bikund",
//     "key with spaces": true
// }

// console.log(myObj[1]);
// console.log(myObj["name"]);
// console.log(myObj["key with spaces"]);


// Bracket notation

// const myObj = {
//     "myProp" : "String value."
// }

// console.log(myObj["myProp"]);


// const myObj = {
//     "false": 25,
//     "10" : true,
//     "key with spaces": true
// }

// console.log(myObj[false]);
// console.log(myObj[10]);
// console.log(myObj["key with spaces"]);

// const colors = {
//     "color1" : "red",
//     "color2": "blue",
//     "color3": "green"
// };

// const randomNumber = Math.ceil( Math.random() * 3);

// console.log(colors["color" + randomNumber]);

const myObj = {};

myObj["myProp"] = "String value.";

console.log(myObj);













