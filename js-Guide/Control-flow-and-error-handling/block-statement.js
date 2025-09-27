// while (x < 10) {
//     x++;
// }

// Conditional statements

// if...else

// if (condition) {
//     statement1;
// } else {
//     statement2;
// }

// if (condition) {
//     statement1;
// } else if (condition2) {
//     statement2;
// } else if (conditionN) {
//     statementN;
// } else {
//     statementLast;
// }

// function checkData() {
//   if (document.form1.threeChar.value.length === 3) {
//     return true;
//   }

//   alert(`Enter exactly three characters.
//         ${document.form1.threeChar.value} is not valid`);
//   return false;
// }

// switch (expression) {
//   case label1:
//     statements1;
//     break;
//   case label2:
//     statements2;
//     break;
//   // …
//   default:
//     statementsDefault;
// }

// const fruitType = "Apples"

// switch (fruitType) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Apples":
//     console.log("Apples are $0.32 a pound.");
//     break;
//   case "Bananas":
//     console.log("Bananas are $0.48 a pound.");
//     break;
//   case "Cherries":
//     console.log("Cherries are $3.00 a pound.");
//     break;
//   case "Mangoes":
//     console.log("Mangoes are $0.56 a pound.");
//     break;
//   case "Papayas":
//     console.log("Papayas are $2.79 a pound.");
//     break;
//   default:
//     console.log(`Sorry, we are out of ${fruitType}.`);
// }
// console.log("Is there anything else you'd like?");

// Exception handling statements

// throw expression;

// throw "Error2";
// throw 42;
// throw true;
// throw {
//     toString() {
//         return "I'm an object";
//     },
// }

function getMonthName(mo) {
  mo--;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (!months[mo]) {
    throw new Error("Invalid month code");
  }
  return months[mo];
}

function logMyErrors(e) {
    console.error("Error caught:", e.message);
}

let myMonth = 12;
let monthName;

try {
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = "unknown";
    logMyErrors(e);
}

console.log(monthName);

