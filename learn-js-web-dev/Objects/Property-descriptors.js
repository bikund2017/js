// const myObj = {};

// Object.defineProperty(myObj, 'myProperty', {
//     value: true,
//     writable: false
// });

// console.log(myObj.myProperty);

// myObj.myProperty = false;

// console.log(myObj.myProperty);


{
    const myObj = {};

    Object.defineProperty(myObj, 'myProperty', {
    value: true,
    writable: false
    });

    myObj.myProperty = false;
    myObj.myProperty;
}


(function () {
    "use strict";
    const myObj = {};

    Object.defineProperty(myObj, 'myProperty', {
    value: true,
    writable: false
    });

    myObj.myProperty = false;
    myObj.myProperty;
}());


