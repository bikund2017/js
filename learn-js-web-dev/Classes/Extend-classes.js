// class ParentClass {}
// class ChildClass extends ParentClass {}

// console.log(Object.getPrototypeOf(ChildClass))

// class MyClass {
//   constructor(myPassedValue) {
//     this.instanceProp = myPassedValue;
//   }
//   classMethod() {
//     console.log(`The value was '${this.instanceProp}.'`);
//   }
// }

// class ChildClass extends MyClass {
//   classMethod() {
//     console.log(
//       `The value was '${this.instanceProp},' and its type was '${typeof this
//         .instanceProp}.'`
//     );
//   }
// }

// const myParentClassInstance = new MyClass("My string");
// const mySubclassInstance = new ChildClass(100);

// console.log(myParentClassInstance.classMethod());

// console.log(mySubclassInstance.classMethod());

// can also call methods defined on the parent class in the context of the child class using super:

// class MyClass {
//   constructor( myPassedValue ) {
//     this.instanceProp = myPassedValue;
//   }
//   classMethod() {
//     console.log( `The value was '${ this.instanceProp }.'`)
//   }
// }

// class ChildClass extends MyClass {
//   subclassMethod() {
//     super.classMethod();
//     console.log( `The value type was '${ typeof this.instanceProp }.'`)
//   }
// }
// const mySubclassInstance = new ChildClass( 100 );

// console.log(mySubclassInstance.subclassMethod());

// class MyClass {
//     constructor (myPassedValue) {
//         this.instanceProp = myPassedValue;
//     }
//     classMethod() {
//         console.log(`The value was '${this.instanceProp }.'`)
//     }
// }


// class ChildClass extends MyClass {
//     constructor (myPassedValue) {
//         super(myPassedValue);
//         this.modifiedProp = myPassedValue + 50;
//     }
//     subclassMethod() {
//         super.classMethod();
//         console.log(`The value type was '${ typeof this.instanceProp }.'`);
//     }
// }

// const mySubclassInstance = new ChildClass( 100 );

// console.log(mySubclassInstance)



// Getters and setters are special methods used exclusively to retrieve and define values, respectively. Methods defined using the get and set keywords lets you create methods that can be interacted with as if they were static properties.


class MyClass {
    constructor(originalValue) {
        this.totalValue = 0;
    }
    set doubleThisValue(newValue) {
        this.totalValue = newValue * 2;
    }
    get currentValue() {
        console.log(`The current value is: ${this.totalValue }`);
    }
}

const myClassInstance = new MyClass();

console.log(myClassInstance);

myClassInstance.doubleThisValue = 20;

console.log(myClassInstance);

console.log(myClassInstance.currentValue)
