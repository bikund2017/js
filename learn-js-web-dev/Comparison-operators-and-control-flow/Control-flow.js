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

let iterationCount = 1;
do {
    console.log(`Loop ${iterationCount}.`);
    iterationCount++;
} while (iterationCount < 3);
