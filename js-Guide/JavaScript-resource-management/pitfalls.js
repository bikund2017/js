/**
 * Pitfalls
 *
 * The resource disposal syntax offers a lot of strong error handling guarantees that ensure
 * the resources are always cleaned up no matter what happens, but there are some pitfalls
 * you may still encounter:
 *
 * 1. Forgetting to use `using` or `await using`.
 *    The resource management syntax is only there to help you when you know you need it,
 *    but there's nothing to yell at you if you forget to use it! Unfortunately, there's no
 *    good way to prevent this before-the-fact, because there are no syntactic clues that
 *    something is a disposable resource, and even for disposable resources, you may want
 *    to declare them without automatic disposal. You probably need a type checker combined
 *    with a linter to catch these issues, such as typescript-eslint (which is still
 *    planning to work on this feature).
 *
 * 2. Use-after-free.
 *    Generally, the `using` syntax ensures that a resource is freed when it goes out of scope,
 *    but there are many ways to persist a value beyond its binding variable. JavaScript does
 *    not have an ownership mechanism like Rust, so you can declare an alias that doesn't use `using`,
 *    or preserve the resource in a closure, etc. The `using` reference contains many examples
 *    of such pitfalls. Again, there's no good way to properly detect this in a complicated
 *    control flow, so you need to be careful.
 *
 * The resource management feature is not a silver bullet. It is definitely an improvement
 * over manually invoking the disposal methods, but it is not smart enough to prevent all
 * resource management bugs. You still need to be careful and understand the semantics of
 * the resources you are using.
 */