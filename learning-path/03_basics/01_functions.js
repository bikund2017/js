// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {

//   console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  //   console.log("bikund");    // not run this console log
  return number1 + number2;
}

const result = addTwoNumbers(20, 33);

// console.log(result);

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// loginUserMessage("bikund")
// console.log(loginUserMessage("bikund"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(
//   calculateCartPrice(200, 400, 500, 1000, 3334424, 23289432424, "bikund")
// );

const user = {
  username: "bikund",
  prices: "199",
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)

handleObject({
  username: "tushar",
  price: "399",
});


const myNewArray = [200, 400, 100, 600]


function returnSecondValue(getArray) {
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([424, 400, 100]));

