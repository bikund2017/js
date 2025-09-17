// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "bikund",
  "full name": "Bikund Kumar",
  //   mySym: "mykey1",
  [mySym]: "mykey1",
  age: "20",
  location: "Noida",
  email: "abc@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"],
};

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

// console.log(typeof JsUser[mySym]);

// console.log(typeof mySym);

JsUser.email = "bikundkumar@proton.me";
// Object.freeze(JsUser);
JsUser.email = "bikund@zero.com";

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this["full name"]}`);
};
JsUser.greetingThree = function () {
  console.log(`Hello JS user, ${this.age}`);
};

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greetingThree());

