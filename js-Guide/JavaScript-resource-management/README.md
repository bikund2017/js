# JavaScript resource management

This guide talks about how to do resource management in JavaScript. Resource management is not exactly the same as memory management, which is a more advanced topic and usually handled automatically by JavaScript. Resource management is about managing resources that are not automatically cleaned up by JavaScript. Sometimes, it's okay to have some unused objects in memory, because they don't interfere with application logic, but resource leaks often lead to things not working, or a lot of excess memory usage. Therefore, this is not an optional feature about optimization, but a core feature to write correct programs!

> **Note:** While memory management and resource management are two separate topics, sometimes you can hook into the memory management system to do resource management, as a last resort. For example, if you have a JavaScript object representing a handle of an external resource, you can create a FinalizationRegistry to clean up the resource when the handle is garbage collected, because there is definitely no way to access the resource afterwards. However, there is no guarantee that the finalizer will run, so it's not a good idea to rely on it for critical resources.

## In this guide

*   [Problem](#problem)
*   [The `using` and `await using` declarations](./using-declarations.js)
*   [The `DisposableStack` and `AsyncDisposableStack` objects](./disposable-stack.js)
*   [Error handling](./error-handling.js)
*   [Examples](./examples.js)
*   [Pitfalls](./pitfalls.js)
*   [Conclusion](#conclusion)

## Problem

Let's first look at a few examples of resources that need to be managed:

*   **File handles**: A file handle is used to read and write bytes in a file. When you are done with it, you must call `fileHandle.close()`, otherwise the file will remain open, even when the JS object is no longer accessible. As the linked Node.js docs say:
    > If a `<FileHandle>` is not closed using the `fileHandle.close()` method, it will try to automatically close the file descriptor and emit a process warning, helping to prevent memory leaks. Please do not rely on this behavior because it can be unreliable and the file may not be closed. Instead, always explicitly close `<FileHandle>`s. Node.js may change this behavior in the future.

*   **Network connections**: Some connections, such as `WebSocket` and `RTCPeerConnection`, need to be closed if no messages are transmitted. Otherwise, the connection remains open, and connection pools are often very limited in size.

*   **Stream readers**: If you don't call `ReadableStreamDefaultReader.releaseLock()`, the stream will be locked and does not permit another reader to consume it.

Here is one concrete example, using a readable stream:

```js
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("a");
    controller.enqueue("b");
    controller.enqueue("c");
    controller.close();
  },
});

async function readUntil(stream, text) {
  const reader = stream.getReader();
  let chunk = await reader.read();

  while (!chunk.done && chunk.value !== text) {
    console.log(chunk);
    chunk = await reader.read();
  }
  // We forgot to release the lock here
}

readUntil(stream, "b").then(() => {
  try {
    const anotherReader = stream.getReader();
    // This will fail
  } catch (e) {
    console.error(e); // TypeError: ReadableStreamDefaultReader constructor can only accept readable streams that are not yet locked to a reader
  }
});
```

Here, we have a stream that emits three chunks of data. We read from the stream until we find the letter "b". When `readUntil` returns, the stream is only partially consumed, so we should be able to continue to read from it using another reader. However, we forgot to release the lock, so although `reader` is no longer available, the stream is still locked and we cannot create another reader.

The solution in this case is straightforward: call `reader.releaseLock()` at the end of `readUntil`. But, a few issues still remain:

1.  **Inconsistency**: different resources have different ways to release them. For example, we have `close()`, `releaseLock()`, `disconnect()`, etc. The pattern does not generalize.

2.  **Error handling**: what happens if the `reader.read()` call fails? Then `readUntil` would terminate and never get to the `reader.releaseLock()` call. We can fix this using `try...finally`:

    ```js
    async function readUntil(stream, text) {
      const reader = stream.getReader();
      try {
        let chunk = await reader.read();

        while (!chunk.done && chunk.value !== text) {
          console.log(chunk);
          chunk = await reader.read();
        }
      } finally {
        reader.releaseLock();
      }
    }
    ```
    But you have to remember to do this every time you have some important resource to release.

3.  **Scoping**: in the above example, `reader` is already closed when we exit the `try...finally` statement, but it continues to be available in its scope. This means you may accidentally use it after it's closed.

4.  **Multiple resources**: if we have two readers on different streams, we have to remember to release both of them. This is a respectable attempt to do so:

    ```js
    const reader1 = stream1.getReader();
    const reader2 = stream2.getReader();
    try {
      // do something with reader1 and reader2
    } finally {
      reader1.releaseLock();
      reader2.releaseLock();
    }
    ```
    However, this introduces more error handling troubles. If `stream2.getReader()` throws, then `reader1` does not get released; if `reader1.releaseLock()` throws an error, then `reader2` does not get released. This means we actually have to wrap each resource acquisition-release pair in its own `try...finally`:

    ```js
    const reader1 = stream1.getReader();
    try {
      const reader2 = stream2.getReader();
      try {
        // do something with reader1 and reader2
      } finally {
        reader2.releaseLock();
      }
    } finally {
      reader1.releaseLock();
    }
    ```
You see how a seemingly benign task of calling `releaseLock` can quickly lead to nested boilerplate code. This is why JavaScript provides integrated language support for resource management.

## Conclusion

Here are the key components of the resource management system:

*   `using` and `await using` declarations for automatic resource disposal.
*   The disposable and async disposable protocols, using the `Symbol.dispose` and `Symbol.asyncDispose` respectively, for resources to implement.
*   The `DisposableStack` and `AsyncDisposableStack` objects for cases where `using` and `await using` are not suitable.

With proper usage of these APIs, you can create systems interacting with external resources that remain strong and robust against all error conditions without lots of boilerplate code.
