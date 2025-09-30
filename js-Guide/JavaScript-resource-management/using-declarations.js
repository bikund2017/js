/**
 * The using and await using declarations
 *
 * The solution we have is two special kinds of variable declaration: `using` and `await using`.
 * They are similar to `const`, but they automatically release the resource when the variable
 * goes out of scope as long as the resource is disposable.
 *
 * Using the same example as in README.md, we can rewrite it as:
 */

/*
// Note: At the time of writing, ReadableStreamDefaultReader does not implement the disposable protocol.
// This is a hypothetical example.

{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
*/

/**
 * First, notice the extra braces around the code. This creates a new block scope for the `using` declarations.
 * Resources declared with `using` are automatically freed when they go out of the scope of `using`,
 * which, in this case, is whenever we are exiting the block, either because all statements have executed,
 * or because an error or return/break/continue was encountered somewhere.
 *
 * This means `using` can only be used in a scope that has a clear lifetime—namely, it cannot be used
 * at the top level of a script, because variables at the top level of a script are in scope for all
 * future scripts on the page, which practically means the resource can never be freed if the page never unloads.
 * However, you can use it at the top level of a module, because the module scope ends when the module finishes executing.
 *
 * Now we know when `using` does cleanup. But how is it done? `using` requires the resource to implement
 * the disposable protocol. An object is disposable if it has the `[Symbol.dispose]()` method.
 * This method is called with no arguments to perform cleanup.
 * For example, in the reader case, the `[Symbol.dispose]` property can be a simple alias or wrapper of `releaseLock`:
 */

// For demonstration
class MyReader {
  // A wrapper
  [Symbol.dispose]() {
    this.releaseLock();
    console.log("Reader disposed (released lock).");
  }
  releaseLock() {
    // Logic to release resources
  }
}

// OR, an alias
// MyReader.prototype[Symbol.dispose] = MyReader.prototype.releaseLock;

/**
 * Through the disposable protocol, `using` can dispose all resources in a consistent fashion
 * without understanding what type of resource it is.
 *
 * Every scope has a list of resources associated with it, in the order they were declared.
 * When the scope exits, the resources are disposed in reverse order, by calling their `[Symbol.dispose]()` method.
 * For example, in the example above, `reader1` is declared before `reader2`, so `reader2` is disposed first, then `reader1`.
 * Errors thrown when attempting to dispose one resource will not prevent disposal of other resources.
 * This is consistent with the `try...finally` pattern, and respects possible dependencies between resources.
 *
 * `await using` is very similar to `using`. The syntax tells you that an `await` happens somewhere—not when
 * the resource is declared, but actually when it's disposed. `await using` requires the resource to be
 * async disposable, which means it has an `[Symbol.asyncDisposable]()` method. This method is called with
 * no arguments and returns a promise that resolves when the cleanup is done. This is useful when the
 * cleanup is asynchronous, such as `fileHandle.close()`, in which case the result of the disposal can
 * only be known asynchronously.
 */

/*
// Hypothetical example
async function exampleWithAwaitUsing() {
    {
        await using fileHandle = open("file.txt", "w");
        await fileHandle.write("Hello");

        // fileHandle.close() is called and awaited
    }
}
*/

/**
 * Because `await using` requires doing an `await`, it is only permitted in contexts where `await` is,
 * which includes inside async functions and top-level await in modules.
 *
 * Resources are cleaned up sequentially, not concurrently: the return value of one resource's
 * `[Symbol.asyncDispose]()` method will be awaited before the next resource's `[Symbol.asyncDispose]()` method is called.
 *
 * Some things to note:
 *
 * - `using` and `await using` are opt in. If you declare your resource using `let`, `const`, or `var`,
 *   no automatic disposal happens, just like any other non-disposable values.
 * - `using` and `await using` require the resource to be disposable (or async disposable).
 *   If the resource does not have the `[Symbol.dispose]()` or `[Symbol.asyncDispose]()` method respectively,
 *   you will get a TypeError at the line of declaration. The resource can be `null` or `undefined`, however,
 *   allowing you to conditionally acquire resources.
 * - Like `const`, `using` and `await using` variables cannot be re-assigned, although the properties
 *   of the objects they hold can be changed. However, the `[Symbol.dispose]()`/`[Symbol.asyncDispose]()`
 *   method is already saved at the time of declaration, so changing the method after the declaration
 *   does not affect the cleanup.
 * - There are some gotchas when conflating scopes with resource lifetime.
 */