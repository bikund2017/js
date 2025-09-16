// function MyFunction() {};
//     const myObject = new MyFunction();

// console.log(typeof myObject)

// function MyFunction() {
//     this.myProperty = true;
// }

// const myObject = new MyFunction();

// console.log(myObject.myProperty)

// function MyFunction(myArgument) {
//     this.myValue = myArgument;
//     this.doubleMyValue = () => myArgument * 2;
// }

// const myObject = new MyFunction(10);

// console.log(myObject.myValue)
// console.log(myObject.doubleMyValue())

// function MyFunction() {
//     console.log(this);
// }
// const myObject = new MyFunction();
// // console.log(MyFunction)

// (function() {
//     "use strict";
//     function MyFunction() {
//         console.log(this);
//     }
//     MyFunction();
// }());

function myFunction(myArgument = false) {
    return {"myProperty": myArgument};
}
const myObject =  myFunction(true);

console.log(myObject)