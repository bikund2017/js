// class MyClass {
//     static {}
// }

// class MyClass {
//     static firstProperty = 'First property.';
//     static secondProperty;
//     static {
//         this.secondProperty = 'Second property.'
//     }
// }

// console.log(MyClass)

// class MyClass {
//     static {
//         console.log("Static initialization block.");
//     }
//     constructor() {
//         console.log("Constructor");
//     }
// }

// const myClassInstance = new MyClass();

class MyClass {
    static myNewField;
    static {
        this.myNewField = this.myField;
    }
    static myField = "My value."
}

// console.log(MyClass.myNewField)

class MyCorrectedClass {
    static myNewField;
    static myField = "My value."

    static {
        this.myNewField = this.myField
    }
}

console.log(MyCorrectedClass.myNewField)
