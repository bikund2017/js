// To create a WeakMap, use the WeakMap() constructor:

// const myWeakMap = new WeakMap();


/*
The WeakMap syntax is similar to Map, but WeakMaps aren't iterable, and trying to use any value other than an object or symbol as a key causes a syntax error. When no references to a key exist outside the WeakMap, that object or symbol, and the associated value in the WeakMap, are both eligible for garbage collection.

This allows for use cases such as storing metadata associated with an object in a WeakMap, using the reference to the object as the key. If no other references exist to this Object, and the Object is removed from memory, the associated metadata is also removed.
*/


// Common use case - Private data:

const privateData = new WeakMap();

class User {
    constructor(name) {
        this.name = name;
        privateData.set(this, {password: "secret123"});
    }
    getPassword() {
        return privateData.get(this).password;
    }
}

const user1 = new User("Bikund");

console.table(user1.name);

console.table(user1.getPassword())


// This makes WeakMaps perfect for storing metadata that should automatically clean up when the associated object is no longer needed!