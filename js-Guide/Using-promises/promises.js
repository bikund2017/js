

// =================================================================
// Introduction to Promises
// =================================================================
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A Promise can be in one of three states:
// 1. pending: The initial state, neither fulfilled nor rejected.
// 2. fulfilled: The operation completed successfully.
// 3. rejected: The operation failed.

// =================================================================
// Creating a Promise
// =================================================================
// The Promise constructor takes a function (an "executor") with two arguments: resolve and reject.
// Inside the executor, you perform your asynchronous operation.
// If the operation is successful, you call resolve() with the result.
// If an error occurs, you call reject() with the error.

const myFirstPromise = new Promise((resolve, reject) => {
  console.log("Promise started... (will resolve or reject in 1 second)");
  setTimeout(() => {
    const success = true; // Change to false to see the rejection
    if (success) {
      resolve("Success! Data has been fetched.");
    } else {
      reject("Failure! Unable to fetch data.");
    }
  }, 1000);
});


// =================================================================
// Consuming a Promise: .then(), .catch(), and .finally()
// =================================================================
// You use these methods to handle the outcome of a Promise.

function successCallback(result) {
  console.log(`[Success] Operation succeeded with result: "${result}"`);
}

function failureCallback(error) {
  console.error(`[Failure] Operation failed with error: "${error}"`);
}

function finalCleanup() {
    console.log("[Finally] This runs whether the promise was fulfilled or rejected.");
}

// .then() is called when the promise is fulfilled.
// .catch() is called when the promise is rejected.
// .finally() is called after the promise is settled (either fulfilled or rejected).

myFirstPromise
    .then(successCallback)
    .catch(failureCallback)
    .finally(finalCleanup);


// =================================================================
// Chaining Promises
// =================================================================
// The .then() method returns a new Promise, allowing you to chain multiple asynchronous operations together.
// The result of one .then() is passed as an argument to the next one.

function stepOne() {
  console.log("\nStarting promise chain...");
  console.log("Step 1: Starting initial operation.");
  return new Promise((resolve) => setTimeout(() => resolve("Initial Data"), 500));
}

function stepTwo(data) {
  console.log(`Step 2: Using '${data}' to do something else.`);
  return new Promise((resolve) => setTimeout(() => resolve("Second Data"), 500));
}

function stepThree(data) {
  console.log(`Step 3: Using '${data}' to do the final thing.`);
  return new Promise((resolve) => setTimeout(() => resolve("Final Result"), 500));
}

// The chain executes sequentially.
stepOne()
  .then(result => stepTwo(result))      // You can also write this as .then(stepTwo)
  .then(newResult => stepThree(newResult)) // You can also write this as .then(stepThree)
  .then(finalResult => {
    console.log(`[Chain Success] Got the final result: "${finalResult}"`);
  })
  .catch(failureCallback); // A single .catch() handles errors from any point in the chain.


// =================================================================
// Async/Await - Modern Syntactic Sugar
// =================================================================
// `async` functions provide a cleaner, more readable syntax for working with promises.
// The `await` keyword pauses the function execution until the promise is settled.

async function runAsyncOperations() {
    try {
        console.log("\nStarting async/await flow...");
        const result1 = await stepOne();
        const result2 = await stepTwo(result1);
        const finalResult = await stepThree(result2);
        console.log(`[Async/Await Success] Got the final result: "${finalResult}"`);
    } catch (error) {
        console.error(`[Async/Await Error] Caught an error: ${error}`);
    }
}

// To see this run, uncomment the line below:
// runAsyncOperations();


// =================================================================
// Promise Composition: Promise.all()
// =================================================================
// Promise.all() is useful for running multiple promises in parallel.
// It takes an array of promises and returns a new promise that fulfills when all of them have fulfilled.
// The result is an array of the results from the input promises.

const promise1 = Promise.resolve("Result 1");
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Result 2"));
const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());

console.log("\nRunning Promise.all()...");
Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, data]) => {
        console.log("[Promise.all] All promises resolved successfully:");
        console.log(" - " + result1);
        console.log(" - " + result2);
        console.log(" - API Data:", data);
    })
    .catch(error => {
        // This will run if any of the promises in the array reject.
        console.error(`[Promise.all] One of the promises rejected: ${error}`);
    });


// =================================================================
// Wrapping Old Callback-Based APIs
// =================================================================
// You can "promisify" functions that use the old callback pattern to make them compatible with modern async code.

// An old-style function that takes a callback
function oldAsyncFunction(param, callback) {
    setTimeout(() => {
        if (param) {
            callback(null, `Success with: ${param}`); // (error, result)
        } else {
            callback("Error: No parameter provided", null); // (error, result)
        }
    }, 500);
}

// A new promise-based wrapper function
function promiseBasedWrapper(param) {
    return new Promise((resolve, reject) => {
        // Call the old function, but handle the result in the callback
        oldAsyncFunction(param, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

console.log("\nUsing a promise-wrapped old API...");
// Now you can use .then() and .catch()
promiseBasedWrapper("some-data")
    .then(result => console.log(`[Wrapper Success] ${result}`))
    .catch(error => console.error(`[Wrapper Error] ${error}`));

// Example of the failure case
promiseBasedWrapper()
    .then(result => console.log(`[Wrapper Success] ${result}`))
    .catch(error => console.error(`[Wrapper Error] ${error}`));
