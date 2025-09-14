// console.log("Hello World");
// console.log('"A string," I said.');
// console.log('"I\'m a string," I said');

// String object

// let myString = String(10);
// console.log(typeof myString);

// let stringObj = new String("my new string.");

// console.log(typeof stringObj);
// console.log(stringObj);

// Concatenation

// console.log("My "+ "string");

// String literals and template literals

// const myString = "This
// is a string";

// const myString = `This is a string`
// console.log(myString);

// console.log('THe result is ' + (2 + 4) + ".");

// console.log( `The result is ${ 2 + 4 }.` );


const myNoun = "template literal";

function myTagFunction(myStrings, myPlaceholder) {
    const myIntialString = myStrings[ 0 ];
    console.log( `${ myIntialString }modified ${ myPlaceholder }.` );
}

console.log(myTagFunction`I'm a ${ myNoun }.`);










