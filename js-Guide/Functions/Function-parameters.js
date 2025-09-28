// Default parameters

// function multiply(a, b) {
//     b = typeof b !== "undefined" ? b : 1;
//     return a * b;
// }

// console.log(multiply(5));

// function multiply(a, b = 1) {
//     return a * b;
// }

// console.log(multiply(5));


// Rest parameters

// function multiply(multiplier, ...theArgs) {
//     return theArgs.map((x) => multiplier * x);
// }

// const arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]



// Arrow functions

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
