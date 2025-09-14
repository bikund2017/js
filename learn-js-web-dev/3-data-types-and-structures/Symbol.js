// console.log(String() === String());

// console.log(String("My string.") === String("My string."));

// console.log(Symbol() === Symbol());

// const mySymbol = Symbol("Desc");

// const myObject = {};
// myObject[mySymbol] = "propSymbol";

// console.log(myObject);

// console.log(Symbol("My symbol.") === Symbol("My symbol."))

// let mySymbol = Symbol("My symbol.");

// console.log(mySymbol.description);

// Shared symbols

let sharedSymbol = Symbol.for("My key.");
console.log(sharedSymbol === Symbol.for("My key."));

console.log(Symbol("String") === Symbol("String"));

console.log(Symbol("String") === Symbol.for("String"));

console.log(Symbol.for("String") === Symbol.for("String"));
