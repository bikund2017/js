// const myVaiable = function() {
//     console.log("This is my function")
// };

// myVaiable();

// const myVaiable = function myFunction() {
//     console.log("This is my function");
// }

// myVaiable();

// const myVaiable = function myFunction() {
//     console.log(`I'm a ${typeof myFunction}.`);
// }

// console.log(typeof myFunction);  // undefined
// console.log(typeof myVaiable)        // function

// myVaiable();

// const myVaiable = function myFunction() {
//     console.log("One second elapsed.");
//     setTimeout(myFunction, 1000);
// }
// setTimeout(myVaiable, 1000);

// Arrow function expressions

// const myFunction = () => {};      // syntex;

// const myFunction = myParameter => {};

// const myFunction = () => 2 + 2;

// console.log(myFunction());


function myParentFunction() {
    this.myProperty = true;
    let myFunction = () => {
        console.log( this );
    }
    myFunction();
};

let myInstance = new myParentFunction();