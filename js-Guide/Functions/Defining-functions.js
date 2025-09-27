// function square(number) {
//     return number * number;
// }

// console.log(square(2));

// function myFunc(theObject) {
//     theObject.make = "Toyota";
// }

// const myCar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998
// };

// console.log(myCar.make);
// myFunc(myCar)
// console.log(myCar.make);

// function myFunc(theArr) {
//     theArr[0] = 30;
// }
// const arr = [45];

// console.log(arr[0]);
// myFunc(arr);
// console.log(arr[0]);

// function addSquares(a, b) {
//     function square(x) {
//         return x * x;
//     }
//     return square(a) + square(b);
// }

// Function expressions

// const getRectArea = function (width, height) {
//     return width * height;
// }

// console.log(getRectArea(3, 4));

// const square = function (number) {
//     return number * number;
// }

// console.log(square(4));

// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1);
// }

// console.log(factorial(4));

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x * x;
}, numbers);
console.log(cubedNumbers);

