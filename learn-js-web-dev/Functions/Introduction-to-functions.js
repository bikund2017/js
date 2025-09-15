// Function declarations || function definition

// function myFunction() {
//     console.log("This is my function")
// }
// myFunction();

// "use strict";
// {
//   myFunction();
//   function myFunction() {
//     console.log("This is my function.");
//   }
// }

// function myFunction() {
//     function myNestedFunction() {
//         console.log("This is my nested function." );
//     }
//     myNestedFunction();
// };

// myFunction();
// // myNestedFunction();

// Function calling

// function myFunction(myParameter) {
//     console.log(`The value is ${myParameter}.` );
// }
// myFunction("string");

// function myFunction(myParameter) {
//     console.log(`The value is ${myParameter}.` );
// }
// myFunction();

// function myFunction(myParameter = "omitted") {
//     console.log(`The value is: ${myParameter}.` );
// }
// myFunction("this string");
// myFunction();

// function myFunction() {
//   console.log(arguments);
// }
// myFunction(3, true, "My string");  // [Arguments] { '0': 3, '1': true, '2': 'My string' }

// Variadic functions

// function myFunction() {
//   let result = "";
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i] + " - ";
//   }
//   console.log(result);
// }
// myFunction("My first string", "My second string", "my third string");

//  rest parameter

// function myFunction(mySeparator, ...myStrings) {
//   console.log(myStrings.join(mySeparator));
// }
// myFunction(" - ", "My first string", "My second string", "my third string");


// function myOuterFunction() {
//     let myInnerArrowFunction = (...myParams) => {
//         console.log( myParams[0]);
//     }
//     myInnerArrowFunction(true);
// }
// myOuterFunction(false);

// let myArrowFunction = (...myParams) => {
//     console.log(myParams[0]);
// }

// myArrowFunction(true)