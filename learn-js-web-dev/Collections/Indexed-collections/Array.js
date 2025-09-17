/* An indexed collection is a data structure in which elements are stored and accessed using numbered indexes. Values stored in an indexed collection are assigned numbered indexes starting from 0, a pattern called "zero-indexing." You can then access the values stored in an indexed collection by referencing their indexes.
 */

// Array

/*An array is a container that can hold zero or more values of any data type, including complex objects or other arrays. Values stored in an array are sometimes called "elements" of the array.
 */

// Creating an array

// const myArray = [true, null, "String", false];

// console.log(myArray);

// const myArray = new Array(true, null, "String", false);

// console.log(myArray);

// const myArray = [true,, true, false];
// console.log(myArray);

// const myArray = [1,,3, 4];

// console.log(myArray.length);

// for (const myValue of myArray) {
//     console.log(myValue + 10);
// }

// const arrayLiteral = [];
// const arrayConstructor = new Array();

// console.log(typeof arrayLiteral);

// console.log(arrayLiteral);

// console.log(typeof arrayConstructor);

// console.log(arrayConstructor);

// Access array values

// ["My string", "My other string"][1];

// const myArray = ["My string", 50, true];

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

// const myArray = ["My string", 50, true];

// console.log(myArray[2]);
// console.log(myArray["2"]);

// Destructuring assignment

// const myArray = ["A string", "A second string"];
// const [myFirstElement, mySecondElement] = myArray;

// const myObject = {
//   firstValue: false,
//   secondValue: true,
// };

// const { firstValue, secondValue } = myObject;

// console.log(myFirstElement);
// console.log(mySecondElement);

// console.log(firstValue);
// console.log(secondValue);

// const myArray = [1,2,3]
// const [myElement, mySecondElement, myThirdElement] = myArray;

// console.log(myElement);

// const myArray = [true];
// const [firstValue = "Default string.", secondValue = "Default string."] =
//   myArray;

//   console.log(firstValue);
//   console.log(secondValue);

// const myArray = [false, null, 0, "", , undefined];
// const [
//   falseValue = true,
//   nullValue = true,
//   zeroValue = true,
//   emptyStringValue = true,
//   emptySlot = true,
//   undefinedValue = true,
// ] = myArray;

// console.table([falseValue, nullValue, zeroValue, emptyStringValue, emptySlot, undefinedValue])

// console.table({
//     falseValue,
//     nullValue,
//     zeroValue,
//     emptyStringValue,
//     emptySlot,
//     undefinedValue
// })

// Spread operator

// const myArray = [1,2,3];

// console.log(...myArray);            // 1 2 3

// const myArray = [4, 5, 6];
// const mySecondArray = [1, 2, 3, ...myArray];

// console.table(mySecondArray)

// const myArray = [1, 2, 3];
// const spreadVariable = [...myArray]

// console.table(spreadVariable)

// const myArray = [1, 2, 3];
// const mySecondArray = [4, 5, 6];
// const myNewArray = [...myArray, ...mySecondArray]

// console.log(myNewArray);

// const myArray = [true, false];
// const myFunction = (myArgument, mySecondArgument) => {
//     console.table([myArgument, mySecondArgument]);

// };

// myFunction(...myArray)

// const myObj = {myProperty: true};
// const mySecondObj = {...myObj};

// console.table(mySecondObj)

// const myFirstObj = {name: "Bikund",
//     age: 20,
//     city: "Noida",
// };

// const mySecondObj = {
//     email: "abc@gmail.com",
//     Single_Parent: false
// };

// const myMergedObj = {...myFirstObj, ...mySecondObj};

// console.table(myMergedObj)

// const myCustomPrototype = {protoProp: "My prototype."};
// const myObj = Object.create(myCustomPrototype, {
//     myEnumerableProp: {
//         value: true,
//         enumerable: false
//     },
//     myNonEnumerableProp: {
//         value: false,
//         enumerable: false
//     }
// });

// const myNewObj = {...myObj};

// console.table(myObj)

// Rest operator

// const myArray = ["First", "Second", "Third", "Fourth", "Fifth"];

// [myFirstElement, mySecondElement, ...remainingElements] = myArray;

// console.table({
//     myFirstElement,
//     mySecondElement,
//     remainingElements
// })

// function myFunction(...myParameters) {
//   let result = 0;
//   myParameters.forEach((myParam) => {
//     result += myParam;
//   });

//   return result;
// }

// console.table([
//   myFunction(2, 2),
//   myFunction(1, 1, 1, 10, 5),
//   myFunction(10, 11, 25),
// ]);


// %TypedArray%

