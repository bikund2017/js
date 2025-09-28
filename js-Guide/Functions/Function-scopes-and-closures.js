// const num1 = 20
// const num2 = 3;
// const name = "Bikund";

// function multiply() {
//     return num1 * num2;
// }

// console.log(multiply());

// function getScore() {
//     const num1 = 2;
//     const num2 = 3;

//     function add() {
//         return `${name} scored ${num1 + num2}`;
//     }

//     return add();
// }

// console.log(getScore());

// Closures

// const pet = function(name) {
//     const getName = function() {
//         return name;
//     };

//     return getName;
// };

// const myPet = pet("Bikund");

// console.log(myPet());

// const createPet = function (name) {
//   let sex;

//   const pet = {
//     setName(newName) {
//       name = newName;
//     },

//     getName() {
//       return name;
//     },

//     getSex() {
//       return sex;
//     },
//     setSex(newSex) {
//       if (
//         typeof newSex === "string" &&
//         (newSex.toLocaleLowerCase() === "male" ||
//           newSex.toLocaleLowerCase() === "female")
//       ) {
//         sex = newSex;
//       }
//     },
//   };

//   return pet;
// };

// const pet = createPet("Bikund");
// console.log(pet.getName());

// pet.setName("Happy");
// pet.setSex("male");
// console.log(pet.getName());
// console.log(pet.getSex());


// Multiply-nested functions

// function A(x) {
//   function B(y) {
//     function C(z) {
//       console.log(x + y + z);
//     }
//     C(3);
//   }
//   B(2);
// }
// A(1); // Logs 6 (which is 1 + 2 + 3)



// Name conflicts

// function outside() {
//   const x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(10)); 


// Using the arguments object

function myConcat(separator) {
  let result = "";

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(myConcat(", ", "red", "orange", "blue"));

console.log(myConcat(" ", "bikund", "is", "a", "good", "boy"));

