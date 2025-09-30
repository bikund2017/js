// =====================================
// SECTION 1: Object Creation
// =====================================

function objectCreationExamples() {
  console.log("--- Object Creation Examples ---");

  // 1. Using Object Initializers (Literals)
  const literalObject = {
    property1: "value1",
    2: "value2", // A number can be a property key
    "property n": "value3", // Strings with spaces need quotes
  };
  console.log("1. Object Literal:", literalObject);

  const myHonda = {
    color: "blue",
    wheels: 4,
    engine: { cylinders: 6, size: 3.0 },
  };
  console.log("   Nested Object Literal:", myHonda);

  // 2. Using a Constructor Function
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const myCar = new Car("Ford", "Mustang", 1969);
  console.log("\n2. Object from Constructor:", myCar);

  // 3. Using Object.create() method
  const Animal = {
    type: "Invertebrates",
    displayType() {
      console.log(this.type);
    },
  };
  const animal1 = Object.create(Animal);
  console.log("\n3. Object from Object.create():");
  animal1.displayType(); // Inherits 'type' from Animal prototype

  const fish = Object.create(Animal);
  fish.type = "Fishes"; // Own property overrides the prototype's property
  fish.displayType();
}

// =====================================
// SECTION 2: Properties and Property Access
// =====================================

function propertyAccessExamples() {
  console.log("\n--- Property Access Examples ---");
  const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };

  // Dot Notation
  console.log("Initial make (dot):", myCar.make);
  myCar.make = "Toyota";
  console.log("Updated make (dot):", myCar.make);

  // Bracket Notation
  console.log("Initial model (bracket):", myCar["model"]);
  myCar["model"] = "Corolla";
  console.log("Updated model (bracket):", myCar["model"]);

  // Bracket notation is required for keys with spaces or when using variables.
  myCar["date created"] = "1969-01-01";
  console.log("Accessing key with space:", myCar["date created"]);

  let propertyName = "year";
  myCar[propertyName] = 2024;
  console.log("Accessing with variable key:", myCar[propertyName]);
  console.log("Final object:", myCar);
}

// =====================================
// SECTION 3: Enumerating Properties
// =====================================

function propertyEnumerationExamples() {
  console.log("\n--- Property Enumeration Examples ---");
  const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };

  console.log("Using for...in loop (includes prototype properties):");
  function showProps(obj, objName) {
    let result = "";
    for (const i in obj) {
      // Object.hasOwn() checks for own properties vs. prototype properties
      if (Object.hasOwn(obj, i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    console.log(result);
  }
  showProps(myCar, "myCar");

  console.log("Using Object.keys() (own enumerable properties only):");
  const keys = Object.keys(myCar);
  console.log("Keys:", keys);
}

// =====================================
// SECTION 4: Defining Methods and `this`
// =====================================

function methodAndThisExamples() {
  console.log("\n--- Methods and `this` Examples ---");

  const myObj = {
    x: 10,
    // Method definition
    myMethod: function (params) {
      this.x = params;
    },
    // Shorthand method syntax
    myOtherMethod(params) {
      this.z = this.x + params;
    },
    print() {
      console.log(`Property z is: ${this.z}`);
    },
  };

  myObj.myMethod(20); // `this` refers to myObj
  myObj.myOtherMethod(50); // `this` refers to myObj
  myObj.print();

  // `this` context depends on how the function is called
  const Manager = { name: "Tushar", job: "Software Engineer" };
  const Intern = { name: "Bikund", job: "Software Engineer Intern" };

  function introduce() {
    console.log(`My name is ${this.name} and I am a ${this.job}.`);
  }

  Manager.introduce = introduce;
  Intern.introduce = introduce;

  Manager.introduce(); // `this` is Manager
  Intern.introduce(); // `this` is Intern
}

// =====================================
// SECTION 5: Getters and Setters
// =====================================

function gettersAndSettersExamples() {
  console.log("\n--- Getters and Setters Examples ---");
  const myObj = {
    a: 7,
    // a 'getter' for property 'b'
    get b() {
      return this.a + 1;
    },
    // a 'setter' for property 'c'
    set c(x) {
      this.a = x / 2;
    },
  };

  console.log("Initial a:", myObj.a); // 7
  console.log("Getter b:", myObj.b); // 8 (calculated as a + 1)

  myObj.c = 50; // Invokes the setter
  console.log("After 'myObj.c = 50', a is now:", myObj.a); // 25
  console.log("Getter b is now:", myObj.b); // 26
}

// =====================================
// SECTION 6: Deleting Properties
// =====================================

function deletingPropertiesExamples() {
  console.log("\n--- Deleting Properties Examples ---");
  const myObj = { a: 5, b: 12 };
  console.log("Initial object:", myObj);

  delete myObj.a;
  console.log("After deleting 'a':", myObj);
  console.log("'a' in myObj?", "a" in myObj); // false
}

// =====================================
// SECTION 7: Comparing Objects
// =====================================

function objectComparisonExamples() {
  console.log("\n--- Object Comparison Examples ---");

  // Case 1: Two distinct objects with the same properties are NOT equal.
  const fruit1 = { name: "apple" };
  const fruit2 = { name: "apple" };
  console.log("fruit1 === fruit2:", fruit1 === fruit2); // false (they reference different objects in memory)

  // Case 2: Two variables referencing the SAME object are equal.
  const fruitA = { name: "apple" };
  const fruitB = fruitA; // fruitB now points to the same object as fruitA
  console.log("fruitA === fruitB:", fruitA === fruitB); // true

  // Modifying one reference affects the other
  fruitA.name = "grape";
  console.log("fruitB.name after changing fruitA:", fruitB.name); // "grape"
}

// =====================================
// Main function to run all examples
// =====================================

function main() {
  objectCreationExamples();
  propertyAccessExamples();
  propertyEnumerationExamples();
  methodAndThisExamples();
  gettersAndSettersExamples();
  deletingPropertiesExamples();
  objectComparisonExamples();
}

// Run all examples
main();
