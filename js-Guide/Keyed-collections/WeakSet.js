// =====================================
// SECTION 1: Core Concepts of WeakSet
// =====================================

function coreConcepts() {
  console.log("--- Core Concepts of WeakSet ---");
  console.log("1. Can only contain objects. Primitives are not allowed.");
  console.log(
    "2. It holds 'weak' references. If an object is garbage collected, it's also removed from the WeakSet."
  );
  console.log(
    "3. Because of garbage collection, WeakSets are not iterable and have no `size` property."
  );
  console.log(
    "4. Primary use case: Tracking a group of objects, e.g., checking if an object has been processed."
  );
}

// =====================================
// SECTION 2: WeakSet in Action
// =====================================

function weakSetExample() {
  console.log("\n--- WeakSet in Action ---");

  const processedObjects = new WeakSet();

  let obj1 = { id: 1 };
  let obj2 = { id: 2 };

  // Add objects to the set to mark them as 'processed'
  processedObjects.add(obj1);
  processedObjects.add(obj2);

  console.log("obj1 and obj2 have been added to the WeakSet.");

  // Check if an object has been processed
  console.log("Has obj1 been processed?", processedObjects.has(obj1)); // true
  console.log("Has obj2 been processed?", processedObjects.has(obj2)); // true

  // Now, let's 'delete' obj1 by removing all references to it.
  obj1 = null;

  // The 'obj1' object is now eligible for garbage collection.
  // Once the garbage collector runs, it will be removed from the WeakSet automatically.
  console.log("\n'obj1' reference set to null.");
  console.log(
    "The object will be automatically removed from the WeakSet upon garbage collection."
  );
}

// =====================================
// SECTION 3: Invalid Value Example
// =====================================

function invalidValueExample() {
  console.log("\n--- Invalid Value Example ---");
  const weakSet = new WeakSet();
  try {
    weakSet.add("a string");
  } catch (error) {
    console.log("Error caught:", error.message);
  }
}

// =====================================
// Main function to run all examples
// =====================================

function main() {
  coreConcepts();
  weakSetExample();
  invalidValueExample();
}

// Run all examples
main();
