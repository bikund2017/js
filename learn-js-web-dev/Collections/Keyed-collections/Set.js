// A Set is an iterable collection of unique values somewhat similar to an array, though a Set can only contain unique values. As with a Map, iterating over a Set preserves the order elements were added to it.

// To create a Set, use the Set() constructor:

// const mySet = new Set();

// can also create a Set from an Array literal:

// const mySet = new Set([1, 2, 3]);

// console.table(mySet)

// Because a Set doesn't allow duplicate elements, when a Set is created from an array containing multiple instances of the same value, it only retains the first instance of that value:

// const mySet = new Set([1, 2, 3,, 2]);

// console.table(mySet)

// const mySet = new Set();

// mySet.add("My value" );

// console.table(mySet)

// console.log(mySet.has("My value"))

// mySet.delete("My value");

// console.table(mySet)

// Though Sets aren't indexed collections, and they're not intended to be used as such, the elements in a Set are iterated over in order of insertion. Attempts to add a duplicate element value to a Set are skipped, preserving the original insertion order:

// const mySet = new Set([1, 2, 3]);

// console.table(mySet)

// mySet.add(2);

// console.table(mySet)

// To create an Array from a Set, use either the Array.from() method or spread syntax:

const mySet = new Set([1, 2, 3]);
const myArray = Array.from(mySet);

console.table(myArray)

console.table([...mySet])

