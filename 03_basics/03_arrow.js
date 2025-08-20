const user = {
  username: "bikund",
  price: "999",

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function coffee() {
//     let username = "bikund"
//     console.log(this.username);
// }

// coffee()

const coffee = () => {
  let username = "bikund";
  console.log(this);
};

// coffee();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "bikund"})

// addTwo(20, 20);
// console.log(addTwo(20, 20));
// console.log(addTwo());

const myArr = [2,5,6,8,9]

myArr.forEach()


