// Fields

// class MyClass {
//     myField;
// }

// const myClassInstance = new MyClass();;
// console.log(myClassInstance)

// class MyClass {
//     myResult = false;
//     set setValue(myValue) {
//         this.myResult = myValue;
//     }
// }

// const myClassInstance = new MyClass();

// console.log(myClassInstance)

// myClassInstance.setValue = true;

// console.log(myClassInstance)

// class MyClass {
//     myField = true;
// }

// const myClassInstance = new MyClass();

// console.log(myClassInstance.myField)

// myClassInstance.myField = false;

// console.log(myClassInstance.myField);



// Private fields and methods


// Private fields and methods are inaccessible outside a class. A private property is associated with an instance of a class, meaning that each instance contains its own set of private fields and methods, as defined on the class.

// class MyClass {
//     #myPrivateField = true;
//     #myPrivateMethod() {}
// }

// const myClassInstance = new MyClass();

// console.log(myClassInstance);


// class MyClass {
//     #myResult = false;
//     set setValue(myValue) {
//         this.#myResult = myValue;
//     }
// }

// const myClassInstance = new MyClass();

// console.log(myClassInstance)

// // myClassInstance.#myResult = true;

// myClassInstance.setValue = true;

// console.log(myClassInstance)

// class MyClass {
//     #myPrivateField = true;
//     #myPrivateMethod() {
//         console.log("This is inside a private method.")
//     }
// }

// const myClassInstance = new MyClass();

// console.log(myClassInstance);

// console.log(myClassInstance.#myPrivateField);

// console.log(myClassInstance.#myPrivateMethod());

// Private fields are tightly scoped to the body of the class that contains them, meaning that even child classes can't access private fields associated with a parent class:

// class MyClass {
//     #myPrivateField = true;
// }

// class ChildClass extends MyClass {
//     childMethod() {
//         console.log(this.#myPrivateField);
//     }
// }


// Static fields and methods


// To define static fields and methods in the body of a class, use the static keyword:

// class MyClass {
//     static myStaticField;
//     static myStaticMethod() {}
// }

// const myClassInstance = new MyClass();


// class MyClass {
//     constructor() {}
// }

// MyClass.myStaticMethod = function() {}

// class MyClass {
//     static myStaticField = true;
//     static myStaticMethod() {
//         console.log("A static method." );
//     }
// }

// const myClassInstance = new MyClass();

// // console.log(myClassInstance.myStaticField);

// // console.log(myClassInstance.myStaticMethod());

// console.log(MyClass.myStaticField);

// console.log(MyClass.myStaticMethod());

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    static fromObject (myObject) {
        return new User(myObject.name, myObject.email ?? "Omitted");
    }
}

const userObject = {
    "name" : "Bikund Kumar",
    "email" : "abc@gmail.com"
};

const secondUserObject = {
    "name" : "Tushar",
    "email" : "abc@outlook.com"
};

const firstUser = User.fromObject(userObject);
const SecondUser = User.fromObject(secondUserObject);

console.table(firstUser);

console.table(SecondUser)