// Conditional statements

// if ...else

// if (true) {
//     console.log("True")
// }

// if (true) {
//     const myString = "True";
//     console.log(myString);

// }

// if (false) {
//     console.log("true")
// }

// if (false) {
//     console.log("true")
// } else {
//     console.log("False")
// }

// const myCondition = 2;
// if (myCondition == 5) {
//     console.log("Five.")
// } else if (myCondition == 3){
//     console.log("Three.")
// } else {
//     console.log("Neither five nor three.")
// }

// Ternary operator

// const myFirstResult = true ? "First value." : "Second value.";
// const mySecondResult = false ? "First value." : "Second value.";

// console.log(myFirstResult)
// console.log(mySecondResult)

// const age = 18;

// const vote = age >= 18 ? 'Yes you can vote' : "Not allowed"
// console.log(vote);

// switch…case

// switch (2 + 2 === 4) {
//   case false:
//     console.log("False");
//   case true:
//     console.log("True.");
// }
// switch (2 + 2 === 4) {
//   case true:
//     console.log("True");
//     break;
//   case false:
//     console.log("False.");
// }

// switch (20) {
//   case 5:
//     console.log("The value was five.");
//     break;
//   case 10:
//     console.log("The value was ten");
//     break;
//   default:
//     console.log("The value was something unexpected.");
// }

// const days = "mon";
// const day = 1;

// switch (days && day) {
//   case "mon" && 1:
//     console.log("Monday");
//     break;
//   case "tue" || 2:
//     console.log("Tuesday");
//     break;
//   case "wed" || 3:
//     console("Wednesday");
//     break;
//   case "thr" || 4:
//     console.log("Thrusday");
//     break;
//   case "fri" || 5:
//     console.log("Friday");
//     break;

//   default: {
//     console.log("Select correct days");
//   }
// }

// Loops and iteration

// while

// let iterationCount = 0;
// console.log("Pre-loop");
// while (iterationCount < 3) {
//   iterationCount++;
//   console.log("Loop iteration.");
// }
// console.log("Continuing on.");

// let iterationCount = 0;
// while (iterationCount < 3) {
//   iterationCount++;
//   console.log(`Loop ${iterationCount}`);
// }

// let iterationCount = 0;
// while (iterationCount <= 5) {
//   iterationCount++;
//   if (iterationCount === 3) {
//     continue;
//   }
//   console.log(`Loop ${iterationCount}.`);
// }
// console.log("Loop ended");

// let iterationCount = 1;
// while (iterationCount <= 5) {
//   if (iterationCount === 3) {
//     console.log("Iteration skipped/");
//     break;
//   }
//   console.log(`Loop ${iterationCount}.`);
//   iterationCount++;
// }
// console.log("Loop ended");

// let randomize = () => Math.floor(Math.random() * 10);
// let randomNum = randomize();
// while (randomNum !== 3) {
//   console.log(`The number is not ${randomNum}.`);
//   randomNum = randomize();
// }
// console.log(`The correct number, ${randomNum}, was found`);

// let randomize = () => Math.floor( Math.random() * 10 );
// let randomNum = randomize();
// while( randomNum !== 3 ){
//   console.log( `The number is not ${ randomNum }.` );
//   randomNum = randomize();
// }
// console.log( `The correct number, ${ randomNum }, was found.` );

// do…while

// let iterationCount = 1;
// do {
//     console.log(`Loop ${iterationCount}.`);
//     iterationCount++;
// } while (iterationCount < 3);

// let randomNum;
// do {
//   randomNum = (() => Math.floor(Math.random() * 10))();
//   console.log(`Is the number ${randomNum}?`);
// } while (randomNum !== 3);
// {
//   console.log(`Yes ${randomNum} was the correct number.`);
// }

// for

// for (let i = 0; i < 3; i++) {
//     console.log("This loop will run three times");
// }

// let myArray = [true, false, true];
// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// iterable data structures
// for […] of […]

// const myIterable = [true, false, true];
// for (const myElement of myIterable) {
//   console.log(myElement);
// }

// for…in…

// const myObject = { myProperty: true, mySecondProperty: false };
// for (const myKey in myObject) {
//   console.log(myKey);
// }

// for (const myKey in myObject) {
//   const myValue = myObject[myKey];
//   console.log(`${myKey}: ${myValue}`);
// }

// const myPrototype = {"protoProperty": true};
// const myObject = Object.create(myPrototype, {
//     myPrototype: {
//         value: true,
//         enumerable: true
//     }
// });
// for (const myKey in myObject) {
//     const myValue = myObject[myKey];
//     console.log(`${myKey} : ${myValue} `)
// }

// const myPrototype = { protoPerty: true };
// const myObject = Object.create(myPrototype, {
//   myPrototype: {
//     value: true,
//     enumerable: true,
//   },
// });
// for (const myKey in myObject) {
//   const myValue = myObject[myKey];
//   if (Object.hasOwn(myObject, myKey)) {
//     console.log(`${myKey} : ${myValue}`);
//   }
// }

// const myObject = { myProperty: true, mySecondProperty: false };
// console.log(Object.keys(myObject));
// console.log(Object.values(myObject))
// console.log(Object.entries(myObject))

// const myPrototype = {"protoProperty": "Non-enumerable property value."};
// const myObject = Object.create(myPrototype, {
//     myProperty: {
//         value: "Enumerable property value.",
//         enumerable: true
//     }
// });

// for (const propKey of Object.keys (myObject)) {
//     console.log(propKey)
// }

// for (const propValue of Object.values(myObject)) {
//     console.log(propValue)
// }

// for (const [propKey, propValue] of Object.entries(myObject)) {
//     console.log(`${propKey} : ${propValue}`)
// }

// forEach()

// const myArray = [true, false];

// myArray.forEach((myElement, i, originalArray) => {
//     console.log(i, myElement, originalArray);
// })

// const array = [1, 2,3, 4];
// const name = ["bikund", "tushar", "asanshay", 1, 2, "Noida"]
// name.forEach((value, index) => {
//     console.log(value, index)
// })

// const myMap = new Map([
//     ['myKey', true],
//     ['mySecondKey', false],
// ]);

// myMap.forEach((myValue, myKey, originalMap) => {
//     console.log(`${myValue}, ${myKey}, ${originalMap}`)
// })

// const mySet = new Set([true, false]);
// mySet.forEach((myValue, myKey, originalSet) => {
//     console.log(myValue, myKey, originalSet)
// })

// Iterators

// const myIterable = [1, 2, 3];
// const myIterator = myIterable[ Symbol.iterator]();
// console.log(myIterable);
// console.log(myIterator)

// const myIterator = myIterable[Symbol.iterator]();

// console.log(myIterator.next());
// console.log(myIterator.next())
// console.log(myIterator.next())
// console.log(myIterator.next())

// Generator Functions

// function* myGeneratorFunction() {
//     console.log("Generator function body")
// };
// const myGeneratorObject = myGeneratorFunction();

// console.log(myGeneratorObject)

// function* myGeneratorFunction() {
//     yield "My first yielded value.";
//     yield "My second yielded value.";
// }
// const myGeneratorObject = myGeneratorFunction();
// console.log(myGeneratorObject.next());
// console.log(myGeneratorObject.next());

// function* myGeneratorFunction() {
//     yield "First";
//     yield  "Second";
// };

// console.log(myGeneratorFunction().next());
// console.log(myGeneratorFunction().next());

// function* myGeneratorFunction() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// const myGeneratorObject = myGeneratorFunction();

// console.log(myGeneratorObject.next());
// console.log(myGeneratorObject.next());
// console.log(myGeneratorObject.next());

function* mySecondaryGenerator() {
  yield 2;
  yield 3;
}

function* myGenerator() {
  yield 1;
  yield* mySecondaryGenerator();
  yield 4;
  return 5;
}

const myIterator = myGenerator();

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
