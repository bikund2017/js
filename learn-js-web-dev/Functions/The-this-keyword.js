// Global binding

// (function() {

//     console.log(this)
// }());

// Implicit binding

// let myObject = {
//     myValue: "This is my string.",
//     myMethod() {
//         console.log(this.myValue);
//     }
// }
// console.log(myObject.myMethod());

// this in arrow functions

// let myObject = {
//     myMethod() {console.log(this);},
//     myArrowFunction: () => console.log(this),
//     myEnclosingMethod: function () {
//         this.myArrowFunction = () => {console.log(this)};
//     }
// };

// console.log(myObject.myMethod());
// console.log(myObject.myArrowFunction());
// console.log(myObject.myEnclosingMethod());
// console.log(myObject.myArrowFunction())

// let myObject = {
//   myMethod() {
//     console.log(this);
//   },
//   myEnclosingMethod: function () {
//     this.myArrowFunction = () => {
//       console.log(this);
//     };
//   },
// };

// myObject.myMethod();
// console.log(myObject.myEnclosingMethod());
// console.log(myObject.myArrowFunction());

// Explicit binding

// var myObject = {
//     myString: "This is my string.",
//     myMethod() {
//         console.log(this.myString);
//     }
// };

// myObject.myMethod()

// setTimeout(myObject.myMethod, 100)

// let myFunction = function() {
//     console.log(this.myValue);
// }

// let myObject = {
//     "myValue": "This is my string."
// }

// myFunction.call(myObject)

// const myObject = {
//     myString: "This is my string.",
//     myMethod() {
//         console.log(this.myString);
//     }
// }
// setTimeout(myObject.myMethod.bind(myObject), 100);
// setTimeout(myObject.myMethod.bind(myObject), 1000);

// let myObject = {
//     "myValue": "This string sites alongside myMethod.",
//     myMethod() {
//         console.log(this.myValue);
//     }
// }
// let myOtherObject = {
//     "myValue": "This is a string in another object entirely.",
// }

// myObject.myMethod.call(myOtherObject)

// let myFunction = function() {
//     console.log(this);
// }

// myFunction.call(null)

// let myFunction = function() {
//     console.log(this);

// }

// let myNumber = 10;

// myFunction.call(myNumber);

// new binding

// class MyClass {
//   myString;
//   constructor() {
//     this.myString = "My string.";
//   }
//   logThis() {
//     console.log(this);
//   }
// }

// const thisClass = new MyClass();

// thisClass.logThis();

// function myFunction() {
//     this.myString = "My string.";
//     this.logThis = function() {
//         console.log(this);

//     }
// }
// const myObject = new myFunction();

// myObject.logThis();

// Event handler binding

// let myRegularFunction = document.querySelector("button");

// myRegularFunction.addEventListener("click", function(Event) {
//     console.log(this);
// })

// let myArrowFunction = document.querySelector("button");

// myArrowFunction.addEventListener("click", (event) => {
//     console.log(this);
// })

let button = document.querySelector("button");
let myObject = {
    "myValue": true
};
function handleClick() {
    console.log(this)
}

button.addEventListener("click", handleClick.bind(myObject))
