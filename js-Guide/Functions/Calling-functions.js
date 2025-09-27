// function square(n) {
//     console.log(n*n)

// }

// square(2)

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120


// Function hoisting

// console.log(square(5));

// function square(n) {
//     return n * n;
// }

// function square(n) {
//     return n * n;
// }

// console.log(square(5));

// Recursion

// const foo = function bar() {
//     // statement go here
// }

// let x = 0;

// while (x < 10) {
//     console.log(`${x} + ${x} = ${x+x}`);
//     x++;
// }



// function loop(x) {
//     if (x >= 10) {
//         return;
//     }
//     console.log(x);
    
//     loop(x + 1);
// }
// loop(0);

// function walkTree(node) {
//   if (node === null) {
//     return;
//   }
//   console.log(node.value);
  
//   for (const child of node.childNodes) {
//     walkTree(child);
//   }
// }

// const tree = {value: 'root', childNodes: []};
// walkTree(tree)

// function foo(i) {
//     if (i < 0) {
//         return;
//     }
//     console.log(`begin: ${i}`);
//     foo(i - 1);
//     console.log(`end: ${i}`);
// }
// foo(3)


// Immediately Invoked Function Expressions (IIFE)

// (function () {
//     console.log("This runs right away!");
//     // Do something
// })();

// function someComplexCalculation() {
//     return 42;
// }

// const value = (function () {
//     const result = someComplexCalculation();
//     // Do something
//     return result;
// })();

// console.log(value);

// const value = (function () {
//     const result = 10 * 5 + 2;
//     return result;
// })();

// console.log(value);


const value = (function () {
    const data = [1,2,3,4,5];
    const sum = data.reduce((acc, num) => acc + num, 0);
    const average = sum / data.length;

    return {
        sum: sum,
        average: average,
        count: data.length
    };
})();

console.log( value);




