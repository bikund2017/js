function f(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); 

var f = function(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); 

const result = (function(a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result); 

function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); 

function createFunction() {
    return f;
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
}
const f = createFunction();
console.log(f(3, 4)); 

function createAdder(a) {
    function f(b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createAdder(3);
console.log(f(4)); 

const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(3, 4)); 


const f = (a, b) => a + b;
console.log(f(3, 4)); 

function f(...args) {
    const sum = args[0] + args[1];
    return sum;
}
console.log(f(3, 4)); 

function log(inputFunction) {
    return function(...args) {
        console.log("Input", args);
        const result = inputFunction(...args);
        console.log("Output", result);
        return result;
    }
}
const f = log((a, b) => a + b);
f(1, 2); // Logs: Input [1, 2] Output 3


it 