// Primitive

/*
    String
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt
*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherID = Symbol("123");

// console.log(id === anotherID);

const bigNumber = 9007199254740991n;

// console.log(bigNumber);

// Reference (Non primitive)

/*
    Array
    Object
    Functions
*/

const name = ["bikund", "tushar", "code"];

const myInfo = {
  name: "bikund",
  age: 20,
  city: "Noida",
};

const myfunction = function () {
  console.log("Hello world");
};

// console.log(typeof bigNumber);

// Stack(Primitive) ,Heap(Non-Primitive)

let myYoutubename = "bikund2017";

let anothername = myYoutubename;
anothername = "tushar";

// console.log(anothername);
// console.log(myYoutubename);

let user1 = {
  email: "abc@gmail.com",
  upi: "123@ybl",
};

let user2 = user1;

user2.email = "new@gmail.com";

console.log(user2);
console.log(user1);

