// ==================================================================================
// Section 1: Custom Iterators (The Manual Way)
// ==================================================================================
console.log("--- Section 1: Custom Iterators ---");

// An iterator is an object that knows how to access items from a collection one at a time.
// It uses a next() method that returns an object with two properties:
// - value: The next value in the sequence.
// - done: A boolean that's true if the sequence has been exhausted.

function makeRangeIterator(start = 0, end = 10, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      // When done, the value can be a return value for the iterator (e.g., the total count).
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

// Example usage of the custom iterator:
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1, 3, 5, 7, 9
  result = it.next();
}

console.log("Iterator finished after", result.value, "iterations."); // "Iterator finished after 5 iterations."
console.log("\n");

// ==================================================================================
// Section 2: Generator Functions (A Simpler Way to Create Iterators)
// ==================================================================================
console.log("--- Section 2: Generator Functions ---");

// Generator functions provide a much easier way to define iterators.
// They are defined using the `function*` syntax.
// The `yield` keyword pauses the function's execution and returns a value.
// When the generator's next() method is called again, it resumes from where it left off.

function* makeRangeGenerator(start = 0, end = 10, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i; // Pauses and returns the value `i`
  }
  // The return value is available in the `value` property of the final result object when `done` is true.
  return iterationCount;
}

// Example usage of the generator function:
const gen = makeRangeGenerator(1, 10, 2);

let genResult = gen.next();
while (!genResult.done) {
  console.log(genResult.value); // 1, 3, 5, 7, 9
  genResult = gen.next();
}

console.log("Generator finished after", genResult.value, "iterations."); // "Generator finished after 5 iterations."
console.log("\n");

// ==================================================================================
// Section 3: Iterables
// ==================================================================================
console.log("--- Section 3: Iterables ---");

// An object is iterable if it defines its iteration behavior, such as what values are looped over in a `for...of` loop.
// To be iterable, an object must implement the `Symbol.iterator` method.
// Generator functions return a generator object, which is both an iterator and an iterable.

function* makeSimpleIterator() {
  yield 1;
  yield 2;
}

const simpleIter = makeSimpleIterator();

// Because the generator object is an iterable, we can use it in a for...of loop.
console.log("Using for...of with a generator:");
for (const item of simpleIter) {
  console.log(item); // 1, 2
}

// An iterable has a `[Symbol.iterator]()` method that returns an iterator.
// For a generator object, this method returns the object itself.
const generatorObj = makeSimpleIterator();
console.log(
  "Is the generator its own iterator?",
  generatorObj[Symbol.iterator]() === generatorObj
); // true
console.log("\n");

// ==================================================================================
// Section 4: User-Defined Iterables
// ==================================================================================
console.log("--- Section 4: User-Defined Iterables ---");

// You can create your own iterable objects.
const myIterable = {
  // This is the iterable's iterator factory. It's a generator function.
  *[Symbol.iterator]() {
    yield "first";
    yield "second";
    yield "third";
  },
};

console.log("Looping over a custom iterable object:");
for (const value of myIterable) {
  console.log(value); // "first", "second", "third"
}
console.log("\n");

// ==================================================================================
// Section 5: Built-in Iterables
// ==================================================================================
console.log("--- Section 5: Built-in Iterables ---");

// Many built-in types in JavaScript are already iterable, like Arrays, Strings, Maps, and Sets.
console.log("Iterating over a built-in Array:");
for (const value of ["a", "b", "c"]) {
  console.log(value); // "a", "b", "c"
}

console.log("\nIterating over a built-in String:");
for (const char of "hello") {
  console.log(char); // "h", "e", "l", "l", "o"
}
console.log("\n");

// ==================================================================================
// Section 6: Advanced Generators
// ==================================================================================
console.log("--- Section 6: Advanced Generators ---");

// Generators can also receive values via the `next()` method.
// This allows for two-way communication between the generator and its caller.
// The `yield` expression itself returns the value passed to `next()`.

function* fibonacci() {
  console.log("Fibonacci generator started.");
  let current = 0;
  let next = 1;
  while (true) {
    // The `reset` variable will receive the value passed to `sequence.next()`
    const reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      console.log("--- Resetting Fibonacci sequence ---");
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
console.log("Calling next():", sequence.next().value); // 0
console.log("Calling next():", sequence.next().value); // 1
console.log("Calling next():", sequence.next().value); // 1
console.log("Calling next():", sequence.next().value); // 2
console.log("Calling next():", sequence.next().value); // 3
console.log("Calling next():", sequence.next().value); // 5
console.log("Calling next(true) to reset:", sequence.next(true).value); // 0, the 'true' value is passed to `reset`
console.log("Calling next():", sequence.next().value); // 1
console.log("Calling next():", sequence.next().value); // 1
console.log("Calling next():", sequence.next().value); // 2
