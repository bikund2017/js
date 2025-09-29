// =====================================
// SECTION 1: Core Concepts of WeakMap
// =====================================

function coreConcepts() {
  console.log("--- Core Concepts of WeakMap ---");
  console.log("1. Keys must be objects. Primitives are not allowed.");
  console.log(
    "2. It holds 'weak' references to keys. If an object key is garbage collected, the entry is removed from the WeakMap."
  );
  console.log(
    "3. Because of garbage collection, WeakMaps are not iterable and have no `size` property."
  );
  console.log(
    "4. Primary use case: Storing additional data for an object without preventing its memory from being reclaimed."
  );
}

// =====================================
// SECTION 2: WeakMap in Action
// =====================================

function weakMapExample() {
  console.log("\n--- WeakMap in Action ---");

  const weakMap = new WeakMap();

  // We need an object to use as a key
  let user = { name: "John" };

  // Store some extra, private data about the 'user' object
  const privateData = { lastLogin: Date.now() };
  weakMap.set(user, privateData);

  console.log(
    "Data has been associated with the 'user' object in the WeakMap."
  );

  // We can retrieve the data as long as we have the reference to the key
  console.log("Does WeakMap have user?", weakMap.has(user)); // true
  console.log("Private data for user:", weakMap.get(user));

  // Now, let's 'delete' the user by removing all references to it.
  user = null;

  // At this point, the 'user' object { name: "John" } is eligible for garbage collection.
  // Once the garbage collector runs, the entry in the weakMap will also be removed automatically.
  // We cannot reliably demonstrate this in a simple script, but this is the key feature.
  console.log("\n'user' object reference set to null.");
  console.log(
    "The entry in the WeakMap will be garbage collected automatically."
  );
  // Note: weakMap.has(user) would now be false if user is null, but the original object might still be in memory for a short time.
}

// =====================================
// SECTION 3: Invalid Key Example
// =====================================

function invalidKeyExample() {
  console.log("\n--- Invalid Key Example ---");
  const weakMap = new WeakMap();
  try {
    weakMap.set("mykey", "some value");
  } catch (error) {
    console.log("Error caught:", error.message);
  }
}

// =====================================
// Main function to run all examples
// =====================================

function main() {
  coreConcepts();
  weakMapExample();
  invalidKeyExample();
}

// Run all examples
main();
