/**
 * Error handling
 *
 * A major use case of the resource management feature is to ensure that resources are always disposed,
 * even when an error occurs. Let us investigate some complex error handling scenarios.
 *
 * We start with the following code, which, by using `using`, is robust against errors:
 */

/*
// Note: This is a hypothetical example as ReadableStreamDefaultReader is not disposable.
async function readUntil(stream, text) {
  // Use `using` instead of `await using` because `releaseLock` is synchronous
  using reader = stream.getReader();
  let chunk = await reader.read();

  while (!chunk.done && chunk.value !== text) {
    console.log(chunk.toUpperCase());
    chunk = await reader.read();
  }
}
*/

/**
 * Suppose that `chunk` turns out to be `null`. Then `toUpperCase()` will throw a `TypeError`,
 * causing the function to terminate. Before the function exits, `reader[Symbol.dispose]()` is called,
 * which releases the lock on the stream.
 */

/*
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("a");
    controller.enqueue(null);
    controller.enqueue("b");
    controller.enqueue("c");
    controller.close();
  },
});

// Assuming readUntil is defined as above and the reader is made disposable.
readUntil(stream, "b")
  .catch((e) => console.error(e)) // TypeError: Cannot read properties of null (reading 'toUpperCase')
  .then(() => {
    try {
        const anotherReader = stream.getReader();
        console.log("Successfully creates another reader");
        // In a real scenario with a disposable reader, this would work.
    } catch(e) {
        console.error(e);
    }
  });
*/

/**
 * So, `using` does not swallow any errors: all errors that occur are still thrown,
 * but the resources get closed right before that. Now, what happens if the resource
 * cleanup itself also throws an error? Let's use a more contrived example:
 */

class MyReaderError {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock");
  }
}

function doSomething() {
  using reader = new MyReaderError();
  throw new Error("Failed to read");
}

try {
  doSomething();
} catch (e) {
  console.error(e); // SuppressedError: An error was suppressed during disposal
  console.error("Suppressed error:", e.suppressed); // Error: Failed to read
  console.error("Main error:", e.error); // Error: Failed to release lock
}

/**
 * There are two errors generated in the `doSomething()` call: an error thrown during `doSomething`,
 * and an error thrown during disposal of `reader` because of the first error. Both errors are thrown together,
 * so what you caught is a `SuppressedError`. This is a special error that wraps two errors:
 * the `error` property contains the later error, and the `suppressed` property contains the earlier error,
 * which gets "suppressed" by the later error.
 *
 * If we have more than one resource, and both of them throw an error during disposal
 * (this should be exceedingly rare–it's already rare for disposal to fail!),
 * then each earlier error is suppressed by the later error, forming a chain of suppressed errors.
 */

class MyReaderChainError {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock on reader");
  }
}

class MyWriterChainError {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock on writer");
  }
}

function doSomethingWithChain() {
  using reader = new MyReaderChainError();
  using writer = new MyWriterChainError();
  throw new Error("Failed to read");
}

try {
  doSomethingWithChain();
} catch (e) {
  console.error(e); // SuppressedError: An error was suppressed during disposal
  console.error(e.suppressed); // SuppressedError: An error was suppressed during disposal
  console.error(e.error); // Error: Failed to release lock on reader
  console.error(e.suppressed.suppressed); // Error: Failed to read
  console.error(e.suppressed.error); // Error: Failed to release lock on writer
}

/**
 * The reader is released last, so its error is the latest and therefore suppresses everything else: it shows up as `e.error`.
 * The writer is released first, so its error is later than the original exiting error, but earlier than the reader error: it shows up as `e.suppressed.error`.
 * The original error about "Failed to read" is the earliest error, so it shows up as `e.suppressed.suppressed`.
 */