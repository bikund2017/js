/*A Map is an iterable data structure that stores information as key-value pairs, similar to an Object literal. Unlike Object literals, a Map allows both values and keys to have any data type, and the order elements are added to a Map is preserved when iterating over it.
 */

// To create a Map, use the Map() constructor:

// const myMap = new Map();

// const myMap = new Map([
//     ["myKey", "A string value"],
//     ["mySecondKey", 500],
//     ["myThirdKey", true]
// ]);

// console.log(myMap);
// console.table(myMap)

// const notAFunction = () => console.log("function");
// const myMap = new Map([
//     [null, 0],
//     [false, "This is false"],
//     [undefined, "No defined value"],
//     [NaN, "Not a number"],
//     ["myLastKey", "This is Last key"]
// ]);

// console.log(myMap);
// console.table(myMap);

// To get, set, or delete Map elements, use the methods inherited from the Map constructor:

// const myMap = new Map();
// myMap.set("myKey", "My First key");

// console.table(myMap.has("myKey"));

// console.table(myMap);

// console.table(myMap.get("myKey"))

// myMap.delete("myKey");

// console.table(myMap)


// Keys in a Map are unique, meaning that setting an identical key overwrites the previously stored key-value pair:

// const myMap = new Map([["myKey", "A string value"]]);

// myMap.set("myKey", 500);

// console.table(myMap)

const myMap = new Map();
myMap.set("myKey", "A string value");

console.table(myMap)