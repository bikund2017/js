// WeakSet is a set that contains only garbage-collectable values, such as references to Objects, or Symbols that haven't been added to the global Symbol registry.


// To create a WeakSet, use the WeakSet() constructor

// const myWeakSet = new WeakSet();

// The WeakSet syntax is similar to Set, though a WeakSet isn't iterable, and trying to add any value other than an object or symbol causes a syntax error. As with WeakMap, when no other references to a value referenced by a WeakSet exist, that value becomes eligible for garbage collection.

// This allows for use cases such as aggregating a single, iterable collection of related objects. If no other references exist to an Object referenced by the WeakSet, the associated element is also removed from the WeakSet.

// Common Use Cases:

// Tracking object states:

// const processedItems = new WeakSet();

// function processItem(item) {
//   if (processedItems.has(item)) {
//     console.log("Already processed");
//     return;
//   }
  
//   // Process the item
//   console.log("Processing item...");
//   processedItems.add(item);
// }

// const item1 = { id: 1 };
// processItem(item1); 
// processItem(item1); 

//  Private flags/markers:

const authorizedUsers = new WeakSet();

class SecureSystem {
    authorize(user) {
        authorizedUsers.add(user);
    }
    isAuthorized(user) {
        return authorizedUsers.has(user);
    }

    accessSecureData(user) {
        if (this.isAuthorized(user)) {
            return "Secret DATA";
        }
        throw new Error("Unauthorized access");
    }
}
