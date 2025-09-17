// ES6 introduced the concept of "classes" in JavaScript, which differs from classes in other programming languages. Here, classes are special functions that serve as templates for creating objects that already contain data, properties associated with that data, and methods related to the manipulation of that data. These objects, properties, and methods are collectively called "members" of the class.

// To define a class, use the class keyword. Following best practice and the convention established by JavaScript's built-in constructor functions, begin any identifier of a class with a capital letter:

// class MyClass {}

// class MyClass {}

// console.log(typeof MyClass)

// To create an instance of a class, use the new operator.

// class MyClass {}

// const myClassInstance = new MyClass();

// console.log(myClassInstance);

// class MyClass {
//   classMethod() {
//     console.log("My class method.");
//   }
// }

// const myClassInstance = new MyClass();

// console.log(myClassInstance.classMethod());

// class MyClass {
//     classMethod() {
//         console.log("My class method.");
//     }
// }

// const myClassInstance = new MyClass("A string.");

// console.log(myClassInstance.classMethod())


// class MyClass {
//     constructor(myPassedValue) {
//         console.log(myPassedValue)
//     }
// }

// const myClassInstance = new MyClass("A string.")

// class MyClass {
//     constructor (myPassedValue) {
//         this.instanceProperty = myPassedValue;
//     }
// }

// const myClassInstance = new MyClass("A string");
// console.log(myClassInstance)

// class MyClass {
//     constructor (myPassedValue) {
//         this.instanceProp = myPassedValue;
//     }
//     myMethod() {
//         console.log(this.instanceProp);
//     }
// }
// const myClassInstance = new MyClass("A string");
// myClassInstance.myMethod();


// Class expressions can be named or left unnamed to create an "anonymous" class.

// let ClassExpression  =class {
//     constructor() {

//     }
// }

// console.log(ClassExpression)


// function classMaker() {
//     return class {
//         constructor() {}
//     }
// }

// let MyVariable = classMaker();

// console.log(MyVariable)

// Redeclaring a class using a class declaration causes a syntax error:

// class MyClass {
//     constructor() {
//         console.log("My class.");
//     }
// }

// class MyClass {
//     constructor() {
//         console.log("My new class.");
//     }
// }


let ClassExpression = class MyClass {};

ClassExpression = class MyOtherClass {
    constructor(myString) {
        this.myProp = myString;
    }
}

new ClassExpression("String");


