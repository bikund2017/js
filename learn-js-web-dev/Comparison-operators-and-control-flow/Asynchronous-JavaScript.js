// Promises

// const myPromise = new Promise((fulfill, reject) => {
//   const myResult = true;
//   setTimeout(() => {
//     if (myResult === true) {
//       fulfill("This Promise was successful.");
//     } else {
//       reject(new Error("This Promise has been rejected."));
//     }
//   }, 10000);
// });

// myPromise
//   .then((fulfilledResult) => console.log(fulfilledResult))
//   .catch((rejectedResult) => console.log(rejectedResult))
//   .finally(() => console.log("The Promise has settled"));

// Concurrency

// const firstPromise = new Promise((fulfill, reject) => fulfill("Successful."));
// const secondPromise = new Promise((fulfill, reject) => fulfill("Successful."));
// const thirdPromise = new Promise((fulfill, reject) => fulfill("Successful."));
// const failedPromise = new Promise((fulfill, reject) => reject("Failed."));
// const successfulPromises = [firstPromise, secondPromise, thirdPromise];
// const oneFailedPromise = [failedPromise, ...successfulPromises];

// Promise.all(successfulPromises)
//   .then((allValues) => {
//     console.log(allValues);
//   })
//   .catch((failValue) => {
//     console.log(failValue);
//   });

// Promise.all(oneFailedPromise)
//   .then((allValues) => {
//     console.log(allValues);
//   })
//   .catch((failValue) => {
//     console.log(failValue);
//   });

// async/await

// async function myFunction() {
//     return "This is my returned value.";
// }

// myFunction()
//     .then( myReturnedValue => {
//         console.log(myReturnedValue)
//     })



async function myFunction() {
  const myPromise = new Promise((fulfill, reject) => {
    setTimeout(() => fulfill("Successful. "), 5000);
  });
  const myPromisedResult = await myPromise;
  return myPromisedResult;
}

myFunction()
  .then((myResult) => console.log(myResult))
  .catch((myFailedResult) => console.error(myFailedResult));
