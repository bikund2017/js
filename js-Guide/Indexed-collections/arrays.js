// =====================================
// SECTION 1: Array Creation
// =====================================

/**
 * Demonstrates different ways to create an array.
 */
function arrayCreationExamples() {
  console.log("--- Array Creation Examples ---");
  // Using the Array constructor
  const arr1 = new Array();
  // Using the Array function
  const arr2 = Array();
  // Using array literal syntax (preferred)
  const arr3 = [];

  console.log("new Array():", arr1, "Length:", arr1.length); // [] Length: 0
  console.log("Array():", arr2, "Length:", arr2.length); // [] Length: 0
  console.log("[]:", arr3, "Length:", arr3.length); // [] Length: 0
}

// =====================================
// SECTION 2: Accessing Array Elements
// =====================================

/**
 * Shows how to access elements in an array using their index.
 */
function accessingElementsExamples() {
  console.log("\n--- Accessing Elements Examples ---");
  const myArray = ["Wind", "Rain", "Fire"];
  console.log("Array:", myArray);
  console.log("myArray[0]:", myArray[0]); // "Wind"
  console.log("myArray[1]:", myArray[1]); // "Rain"
  console.log("myArray[2]:", myArray[2]); // "Fire"
  console.log("myArray[3]:", myArray[3]); // undefined (index out of bounds)
}

// =====================================
// SECTION 3: Populating Arrays
// =====================================

/**
 * Illustrates how to add elements to an array by assigning values to specific indices.
 */
function populatingArraysExamples() {
  console.log("\n--- Populating Arrays Examples ---");
  const emp = [];
  console.log("Initial empty array:", emp);
  emp[0] = "John";
  emp[1] = "Mary";
  emp[2] = "Peter";
  emp[4] = 34; // Creates a sparse array with an empty slot at index 3
  console.log("Populated array:", emp); // ["John", "Mary", "Peter", <1 empty item>, 34]
  console.log("Length of populated array:", emp.length); // 5
}

// =====================================
// SECTION 4: Understanding the `length` Property
// =====================================

/**
 * Explains the behavior of the `length` property of an array.
 */
function arrayLengthExamples() {
  console.log("\n--- Array `length` Property Examples ---");
  const cats = ["Dusty", "Misty", "Twiggy"];
  console.log("Initial array:", cats, "Length:", cats.length); // ["Dusty", "Misty", "Twiggy"] Length: 3

  // Truncating an array by changing its length
  cats.length = 2;
  console.log("After setting length to 2:", cats); // ["Dusty", "Misty"]

  // Clearing an array
  cats.length = 0;
  console.log("After setting length to 0:", cats); // []

  // Making an array sparse
  cats.length = 3;
  console.log("After setting length to 3:", cats); // [<3 empty items>]
}

// =====================================
// SECTION 5: Iterating Over Arrays
// =====================================

/**
 * Shows common methods for iterating over array elements.
 */
function iteratingOverArraysExamples() {
  console.log("\n--- Iterating Over Arrays Examples ---");
  const fruits = ["Mango", "Apple", "Banana"];
  console.log("Array to iterate:", fruits);

  console.log("Using a for loop:");
  for (let i = 0; i < fruits.length; i++) {
    console.log(`  Index ${i}:`, fruits[i]);
  }

  console.log("Using the forEach method:");
  fruits.forEach((fruit, index) => {
    console.log(`  Index ${index}:`, fruit);
  });
}

// =====================================
// SECTION 6: Common Array Methods
// =====================================

/**
 * Demonstrates a variety of essential array methods.
 */
function arrayMethodsExamples() {
  console.log("\n--- Common Array Methods Examples ---");

  // concat: Merges two or more arrays
  let arr = ["1", "2"].concat("a", "b");
  console.log("concat:", arr); // ["1", "2", "a", "b"]

  // join: Joins all elements of an array into a string
  const list = ["Wind", "Rain", "Fire"].join(" - ");
  console.log("join:", list); // "Wind - Rain - Fire"

  // push: Adds one or more elements to the end of an array
  arr = ["1", 2];
  arr.push("hello");
  console.log("push:", arr); // ["1", 2, "hello"]

  // pop: Removes the last element from an array
  arr.pop();
  console.log("pop:", arr); // ["1", 2]

  // shift: Removes the first element from an array
  arr.shift();
  console.log("shift:", arr); // [2]

  // unshift: Adds one or more elements to the beginning of an array
  arr.unshift("4", "5");
  console.log("unshift:", arr); // ["4", "5", 2]

  // slice: Extracts a section of an array
  const sliced = ["a", "b", "c", "d", "e"].slice(1, 4);
  console.log("slice(1, 4):", sliced); // ["b", "c", "d"]

  // at: Takes an integer value and returns the item at that index (allows negative integers)
  const atArr = ["a", "b", "c", "d", "e"];
  console.log("at(-1):", atArr.at(-1)); // "e"

  // splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements
  let spliced = ["1", "2", "3", "4", "5"];
  spliced.splice(3, 2, "a", "b"); // (start, deleteCount, item1, item2, ...)
  console.log("splice:", spliced); // ["1", "2", "3", "a", "b"]

  // reverse: Reverses an array in place
  const reversed = ["one", "two", "three"];
  reversed.reverse();
  console.log("reverse:", reversed); // ["three", "two", "one"]

  // flat: Creates a new array with all sub-array elements concatenated into it
  let flatArr = [1, 2, [3, 4, [5, 6]]];
  console.log("flat (depth 1):", flatArr.flat()); // [1, 2, 3, 4, [5, 6]]
  console.log("flat (depth 2):", flatArr.flat(2)); // [1, 2, 3, 4, 5, 6]

  // sort: Sorts the elements of an array in place
  const sorted = ["Wind", "Rain", "Fire"];
  sorted.sort();
  console.log("sort (alphabetical):", sorted); // ["Fire", "Rain", "Wind"]

  const sortedNums = [1, 30, 4, 21, 100000];
  sortedNums.sort((a, b) => a - b); // For numerical sort
  console.log("sort (numerical):", sortedNums); // [1, 4, 21, 30, 100000]
}

// =====================================
// SECTION 7: Searching and Filtering
// =====================================

/**
 * Covers methods for searching, filtering, and finding elements in an array.
 */
function searchingAndFilteringExamples() {
  console.log("\n--- Searching and Filtering Examples ---");
  const mix = ["a", 10, "b", 20, "c", 30, "b"];

  // indexOf/lastIndexOf: Find the index of an element
  console.log('indexOf("b"):', mix.indexOf("b")); // 2
  console.log('lastIndexOf("b"):', mix.lastIndexOf("b")); // 6

  // find/findLast: Find the first/last element that satisfies a condition
  const foundString = mix.find((item) => typeof item === "string");
  console.log("find (string):", foundString); // "a"
  const foundLastNumber = mix.findLast((item) => typeof item === "number");
  console.log("findLast (number):", foundLastNumber); // 30

  // findIndex/findLastIndex: Find the index of the first/last element that satisfies a condition
  const numIndex = mix.findIndex((item) => typeof item === "number");
  console.log("findIndex (number):", numIndex); // 1
  const lastStringIndex = mix.findLastIndex((item) => typeof item === "string");
  console.log("findLastIndex (string):", lastStringIndex); // 6

  // filter: Creates a new array with all elements that pass the test
  const numbersOnly = mix.filter((item) => typeof item === "number");
  console.log("filter (numbers):", numbersOnly); // [10, 20, 30]

  // map: Creates a new array populated with the results of calling a provided function on every element
  const mapped = numbersOnly.map((item) => item * 2);
  console.log("map (* 2):", mapped); // [20, 40, 60]
}

// =====================================
// SECTION 8: Testing Array Elements
// =====================================

/**
 * Demonstrates methods that test whether elements in the array pass a condition.
 */
function testingElementsExamples() {
  console.log("\n--- Testing Elements Examples ---");
  const arr1 = [1, 2, 3];
  const arr2 = ["a", "b", "c"];
  const arr3 = ["a", 1, "b"];

  const isString = (value) => typeof value === "string";
  const isNumber = (value) => typeof value === "number";

  // every: Checks if all elements in an array pass a test
  console.log("arr1.every(isNumber):", arr1.every(isNumber)); // true
  console.log("arr2.every(isString):", arr2.every(isString)); // true
  console.log("arr3.every(isString):", arr3.every(isString)); // false

  // some: Checks if at least one element in an array passes a test
  console.log("arr1.some(isString):", arr1.some(isString)); // false
  console.log("arr3.some(isNumber):", arr3.some(isNumber)); // true
}

// =====================================
// SECTION 9: Reducing an Array
// =====================================

/**
 * Shows how to use the reduce method to accumulate a single value.
 */
function reducingArraysExamples() {
  console.log("\n--- Reducing Arrays Examples ---");
  const a = [10, 20, 30];
  const total = a.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log("reduce (sum):", total); // 60
}

// =====================================
// SECTION 10: Advanced Concepts
// =====================================

/**
 * Covers more advanced topics like sparse arrays, multi-dimensional arrays, and array-like objects.
 */
function advancedConcepts() {
  console.log("\n--- Advanced Concepts ---");

  // --- Sparse Arrays ---
  console.log("  --- Sparse Arrays ---");
  // A sparse array has empty slots.
  const sparse = [1, 2, , , 5];
  console.log("  Sparse Array:", sparse); // [1, 2, <2 empty items>, 5]
  console.log("  Length:", sparse.length); // 5
  console.log("  Accessing empty slot sparse[2]:", sparse[2]); // undefined
  // Note: some methods skip empty slots, while others don't.
  sparse.forEach((i) => console.log("  forEach on sparse:", i)); // Logs: 1, 2, 5
  const mappedSparse = sparse.map((i) => i * 10);
  console.log("  map on sparse:", mappedSparse); // [10, 20, <2 empty items>, 50]

  // --- Multi-dimensional Arrays ---
  console.log("\n  --- Multi-dimensional Arrays ---");
  const matrix = new Array(3);
  for (let i = 0; i < 3; i++) {
    matrix[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
      matrix[i][j] = `[${i},${j}]`;
    }
  }
  console.log("  3x3 Matrix:");
  console.table(matrix);

  // --- Array-like Objects ---
  console.log("\n  --- Array-like Objects ---");
  // Objects that have a `length` property and indexed elements, but are not arrays.
  // Example: strings, NodeList, arguments object in functions.
  const arrayLike = "hello";
  console.log("  Array-like string:", arrayLike);
  // We can use Array.prototype methods on them using `call`.
  console.log("  Using forEach on a string:");
  Array.prototype.forEach.call(arrayLike, (char) => {
    console.log(`    - ${char}`);
  });
}

// =====================================
// SECTION 11: Grouping Array Elements (ES2023+)
// =====================================

/**
 * Demonstrates how to group elements of an array based on a condition.
 * Note: Object.groupBy is a recent addition to JavaScript.
 */
function groupingArrayElementsExamples() {
  console.log("\n--- Grouping Array Elements ---");
  const inventory = [
    { name: "asparagus", type: "vegetable" },
    { name: "bananas", type: "fruit" },
    { name: "goat", type: "meat" },
    { name: "cherries", type: "fruit" },
    { name: "fish", type: "meat" },
  ];

  // Check if Object.groupBy exists before running
  if (Object.groupBy) {
    const result = Object.groupBy(inventory, ({ type }) => type);
    console.log("Grouped by type:", result);
  } else {
    console.log("Object.groupBy is not supported in this environment.");
  }
}

// =====================================
// Main function to run all examples
// =====================================

function main() {
  arrayCreationExamples();
  accessingElementsExamples();
  populatingArraysExamples();
  arrayLengthExamples();
  iteratingOverArraysExamples();
  arrayMethodsExamples();
  searchingAndFilteringExamples();
  testingElementsExamples();
  reducingArraysExamples();
  groupingArrayElementsExamples();
  advancedConcepts();
}

// Run all examples
main();
