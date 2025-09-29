// JavaScript Classes: 

// Introduction:
// Classes are a template for creating objects. They encapsulate data with code to work on that data.
// These correspond to the three key features of classes:
// 1. Constructor
// 2. Instance methods and instance fields
// 3. Static methods and static fields

// ==========================================================================
// 1. Declaring a Class
// ==========================================================================

// A class is declared using the 'class' keyword.
class MyClass {
  // class body
}

// You can also use a class expression.
const MyClassExpression = class {
  // class body
};

// Or a named class expression. The name is only visible inside the class.
const MyClassNamed = class MyClassLongerName {
  // class body
};
// new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined

// Note: Unlike function declarations, class declarations are not hoisted.
// new HoistingTest(); // ReferenceError
// class HoistingTest {}

// ==========================================================================
// 2. The Constructor
// ==========================================================================

// The constructor method is a special method for creating and initializing an object created with a class.
// There can only be one special method with the name "constructor" in a class.

class Color {
  constructor(r, g, b) {
    // 'this' refers to the new instance being created.
    // We are assigning the rgb values to a 'values' property on the instance.
    this.values = [r, g, b];
  }
}

const red = new Color(255, 0, 0);
console.log("Constructor Example:", red.values); // Output: Constructor Example: [ 255, 0, 0 ]

// ==========================================================================
// 3. Instance Fields and Methods
// ==========================================================================

// Instance methods are functions that belong to an instance of a class.
// Instance fields are variables that belong to an instance of a class.

class ColorWithMethods {
  // Public instance field
  colorName = "Generic Color";

  constructor(r, g, b) {
    this.values = [r, g, b];
  }

  // Instance method
  getRed() {
    return this.values[0];
  }

  // Instance method
  setRed(value) {
    this.values[0] = value;
  }
}

const blue = new ColorWithMethods(0, 0, 255);
console.log("Initial Red Value:", blue.getRed()); // Output: Initial Red Value: 0
blue.setRed(100);
console.log("Updated Red Value:", blue.getRed()); // Output: Updated Red Value: 100
console.log("Instance Field:", blue.colorName); // Output: Instance Field: Generic Color

// ==========================================================================
// 4. Private Fields and Methods
// ==========================================================================

// Private fields and methods are accessible only within the class declaration itself.
// They are declared with a '#' prefix.

class ColorWithPrivate {
  // Private instance field
  #values;

  constructor(r, g, b) {
    this.#values = [r, g, b];
  }

  getRed() {
    return this.#values[0];
  }

  setRed(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("Invalid Red value");
    }
    this.#values[0] = value;
  }

  // You can access private fields of other instances of the same class.
  redDifference(anotherColor) {
    // Note: This assumes anotherColor is an instance of ColorWithPrivate
    return this.#values[0] - anotherColor.#values[0];
  }
}

const green = new ColorWithPrivate(0, 255, 0);
console.log("Private Field Access (getRed):", green.getRed()); // Output: Private Field Access (getRed): 0
// console.log(green.#values); // SyntaxError: Private field '#values' must be declared in an enclosing class

const darkGreen = new ColorWithPrivate(0, 100, 0);
console.log("Red Difference:", green.redDifference(darkGreen)); // Output: Red Difference: 155

// ==========================================================================
// 5. Accessor Fields (Getters and Setters)
// ==========================================================================

// Getters and setters allow you to define object accessors (computed properties).

class ColorWithAccessors {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }

  get red() {
    console.log("Getter for red was called.");
    return this.values[0];
  }

  set red(value) {
    console.log("Setter for red was called.");
    this.values[0] = value;
  }
}

const purple = new ColorWithAccessors(128, 0, 128);
console.log("Using Getter:", purple.red); // Output: Using Getter: 128
purple.red = 200; // Using Setter
console.log("After Setter:", purple.values); // Output: After Setter: [ 200, 0, 128 ]

// ==========================================================================
// 6. Static Fields and Methods
// ==========================================================================

// Static methods and fields are defined on the class itself, not on the instances.
// They are useful for utility functions or properties that are shared across all instances.

class ColorUtils {
  // Static field
  static defaultColor = "black";

  // Static method
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }

  // Static initialization block
  static {
    console.log("ColorUtils class is being initialized.");
  }
}

console.log("Static Field:", ColorUtils.defaultColor); // Output: Static Field: black
console.log("Static Method (valid):", ColorUtils.isValid(255, 0, 0)); // Output: Static Method (valid): true
console.log("Static Method (invalid):", ColorUtils.isValid(256, 0, 0)); // Output: Static Method (invalid): false

// ==========================================================================
// 7. Inheritance with 'extends' and 'super'
// ==========================================================================

// Classes can inherit from other classes using the 'extends' keyword.
// The 'super' keyword is used to call the parent class's constructor and methods.

class BaseColor {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  toString() {
    return this.#values.join(", ");
  }
}

class ColorWithAlpha extends BaseColor {
  #alpha;
  constructor(r, g, b, a) {
    // Call the parent constructor with super()
    super(r, g, b);
    this.#alpha = a;
  }

  // Override the parent's toString method
  toString() {
    // Call the parent's toString method with super.toString()
    return `${super.toString()}, ${this.#alpha}`;
  }
}

const transparentRed = new ColorWithAlpha(255, 0, 0, 0.5);
console.log("Inheritance Example:", transparentRed.toString()); // Output: Inheritance Example: 255, 0, 0, 0.5
