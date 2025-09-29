
// =====================================
// SECTION 1: Map Creation and Basic Operations
// =====================================

function basicMapOperations() {
  console.log("--- Basic Map Operations ---");

  // Create a new Map
  const sayings = new Map();
  console.log("New Map created:", sayings);

  // set(key, value): Stores a value by a key.
  sayings.set("dog", "woof");
  sayings.set("cat", "meow");
  sayings.set("elephant", "toot");
  sayings.set(1, "one"); // Keys can be any type
  console.log("After setting values:", sayings);

  // get(key): Returns the value by the key, undefined if key doesn’t exist.
  console.log('sayings.get("dog"):', sayings.get("dog")); // "woof"
  console.log('sayings.get("fox"):', sayings.get("fox")); // undefined

  // has(key): Returns true if the key exists, false otherwise.
  console.log('sayings.has("cat"):', sayings.has("cat")); // true
  console.log('sayings.has("bird"):', sayings.has("bird")); // false

  // delete(key): Removes the value by the key.
  sayings.delete("dog");
  console.log('After deleting "dog":', sayings);
  console.log('sayings.has("dog"):', sayings.has("dog")); // false

  // size: Returns the current element count.
  console.log("Map size:", sayings.size); // 3

  // clear(): Removes everything from the map.
  sayings.clear();
  console.log("After clearing the map:", sayings);
  console.log("Map size after clear:", sayings.size); // 0
}

// =====================================
// SECTION 2: Iterating Over a Map
// =====================================

function iteratingOverMap() {
  console.log("\n--- Iterating Over a Map ---");
  const contacts = new Map();
  contacts.set("John", { phone: "123-456-7890", address: "123 Main St" });
  contacts.set("Jane", { phone: "987-654-3210", address: "456 Oak Ave" });
  contacts.set("Peter", { phone: "555-555-5555", address: "789 Pine Ln" });

  console.log("Iterating over [key, value] pairs:");
  for (const [key, value] of contacts) {
    console.log(`  ${key}'s phone: ${value.phone}`);
  }

  console.log("\nIterating over keys:");
  for (const key of contacts.keys()) {
    console.log(`  Key: ${key}`);
  }

  console.log("\nIterating over values:");
  for (const value of contacts.values()) {
    console.log(`  Value:`, value);
  }
}

// =====================================
// SECTION 3: Map from an Array
// =====================================

function mapFromArray() {
  console.log("\n--- Creating a Map from an Array ---");
  const keyValueArray = [
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
  ];

  const myMap = new Map(keyValueArray);
  console.log("Map created from array:", myMap);
}

// =====================================
// Main function to run all examples
// =====================================

function main() {
  basicMapOperations();
  iteratingOverMap();
  mapFromArray();
}

// Run all examples
main();
