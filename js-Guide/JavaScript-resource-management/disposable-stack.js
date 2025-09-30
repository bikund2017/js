/**
 * The DisposableStack and AsyncDisposableStack objects
 *
 * `using` and `await using` are special syntaxes. Syntaxes are convenient and hide a lot of the complexity,
 * but sometimes you need to do things manually.
 *
 * For one common example: what if you don't want to dispose the resource at the end of this scope,
 * but at some later scope? Consider this:
 */

/*
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
*/

/**
 * As we said, `using` is like `const`: it must be initialized and can't be reassigned, so you may attempt this:
 */

/*
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
*/

/**
 * However, this means all logic has to be written inside the `if` or `else`, causing a lot of duplication.
 * What we want to do is to acquire and register the resource in one scope but dispose it in another.
 * We can use a `DisposableStack` for this purpose, which is an object which holds a collection of
 * disposable resources and which itself is disposable:
 */

/*
{
  using disposer = new DisposableStack();
  let reader;
  if (someCondition) {
    reader = disposer.use(stream.getReader());
  } else {
    reader = disposer.use(stream.getReader({ mode: "byob" }));
  }
  // Do something with reader
  // Before scope exit, disposer is disposed, which disposes reader
}
*/

/**
 * You may have a resource that does not yet implement the disposable protocol, so it will be rejected by `using`.
 * In this case, you can use `adopt()`.
 */

/*
{
  using disposer = new DisposableStack();
  // Suppose reader does not have the [Symbol.dispose]() method,
  // then it cannot be used with using.
  // However, we can manually pass a disposer function to disposer.adopt
  const reader = disposer.adopt(stream.getReader(), (reader) =>
    reader.releaseLock(),
  );
  // Do something with reader
  // Before scope exit, disposer is disposed, which disposes reader
}
*/

/**
 * You may have a disposal action to perform but it's not "tethered" to any resource in particular.
 * Maybe you just want to log a message saying "All database connections closed" when there are
 * multiple connections open simultaneously. In this case, you can use `defer()`.
 */

/*
{
  using disposer = new DisposableStack();
  disposer.defer(() => console.log("All database connections closed"));
  const connection1 = disposer.use(openConnection());
  const connection2 = disposer.use(openConnection());
  // Do something with connection1 and connection2
  // Before scope exit, disposer is disposed, which first disposes connection1
  // and connection2 and then logs the message
}
*/

/**
 * You may want to do conditional disposal—for example, only dispose claimed resources when an error occurred.
 * In this case, you can use `move()` to preserve the resources which would otherwise be disposed.
 */

/*
class MyResource {
  #resource1;
  #resource2;
  #disposables;
  constructor() {
    using disposer = new DisposableStack();
    this.#resource1 = disposer.use(getResource1());
    this.#resource2 = disposer.use(getResource2());
    // If we made it here, then there were no errors during construction and
    // we can safely move the disposables out of `disposer` and into `#disposables`.
    this.#disposables = disposer.move();
    // If construction failed, then `disposer` would be disposed before reaching
    // the line above, disposing `#resource1` and `#resource2`.
  }
  [Symbol.dispose]() {
    this.#disposables.dispose(); // Dispose `#resource2` and `#resource1`.
  }
}
*/

/**
 * `AsyncDisposableStack` is like `DisposableStack`, but for use with async disposable resources.
 * Its `use()` method expects an async disposable, its `adopt()` method expects an async cleanup function,
 * and its `dispose()` method expects an async callback. It provides a `[Symbol.asyncDispose]()` method.
 * You can still pass it sync resources if you have a mix of both sync and async.
 */