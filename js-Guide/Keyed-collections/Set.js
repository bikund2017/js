// =====================================
// SECTION 1: Set Creation and Basic Operations
// =====================================

function basicSetOperations() {
  console.log("--- Basic Set Operations ---");

  // Create a new Set
  const mySet = new Set();
  console.log("New Set created:", mySet);

  // add(value): Adds a value to the set. Returns the set.
  mySet.add(1);
  mySet.add("Some text");
  mySet.add("foo");
  mySet.add(1); // Adding a duplicate value is ignored.
  console.log("After adding values:", mySet);

  // has(value): Returns true if the value exists, false otherwise.
  console.log("mySet.has(1):", mySet.has(1)); // true
  console.log('mySet.has("bar"):', mySet.has("bar")); // false

  // delete(value): Removes the value. Returns true if value was present.
  mySet.delete("foo");
  console.log('After deleting "foo":', mySet);

  // size: Returns the element count.
  console.log("Set size:", mySet.size); // 2

  // clear(): Removes everything from the set.
  mySet.clear();
  console.log("After clearing the set:", mySet);
  console.log("Set size after clear:", mySet.size); // 0
}

// =====================================
// SECTION 2: Iterating Over a Set
// =====================================

function iteratingOverSet() {
  console.log("\n--- Iterating Over a Set ---");
  const items = new Set(["apple", "banana", "cherry"]);
  console.log("Set to iterate:", items);

  console.log("Iterating with for...of:");
  for (const item of items) {
    console.log(`  - ${item}`);
  }

  console.log("\nIterating with forEach:");
  items.forEach((item) => {
    console.log(`  - ${item}`);
  });
}

// =====================================
// SECTION 3: Converting Between Array and Set
// =====================================

function arrayAndSetConversion() {
  console.log("\n--- Array and Set Conversion ---");

  // Create a Set from an Array to get unique values
  const numbers = [1, 2, 3, 4, 3, 2, 1];
  console.log("Original array:", numbers);
  const uniqueNumbersSet = new Set(numbers);
  console.log("Set from array:", uniqueNumbersSet);

  // Convert a Set back to an Array
  const uniqueNumbersArray = Array.from(uniqueNumbersSet);
  console.log("Array from set (using Array.from):", uniqueNumbersArray);

  const uniqueNumbersArraySpread = [...uniqueNumbersSet];
  console.log(
    "Array from set (using spread syntax):",
    uniqueNumbersArraySpread
  );
}

// =====================================
// Main function to run all examples
// =====================================

function main() {
  basicSetOperations();
  iteratingOverSet();
  arrayAndSetConversion();
}

// Run all examples
main();
