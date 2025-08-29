const { error } = require("console");
const { resolve } = require("path");

const promiseOne = new Promise(function (resolve, reject) {
  // do an async call
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consume");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "bikund",
      email: "abc@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "bikund", password: 1234 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({
        username: "javaScript",
        password: 1234,
      });
    } else {
      reject(`Error: js went wrong`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const respone = await promiseFive;
    console.log(respone);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllusers() {
//   try {
//     const respone = await fetch('https://api.github.com/users/hiteshchoudhary');

//     const data = await respone.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllusers()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((respone) => {
    return respone.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
