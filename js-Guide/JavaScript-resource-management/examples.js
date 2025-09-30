/**
 * Examples
 */

/**
 * Automatically releasing object URLs
 *
 * In the following example, we create an object URL to a blob (in a real application,
 * this blob would be fetched from somewhere, such as a file or a fetch response)
 * so we can download the blob as a file. In order to prevent a resource leak,
 * we must free the object URL with `URL.revokeObjectURL()` when it is no longer needed
 * (that is, when the download has successfully started). Because the URL itself is just a string
 * and therefore doesn't implement the disposable protocol, we cannot directly declare `url` with `using`;
 * therefore, we create a `DisposableStack` to serve as the disposer for `url`.
 * The object URL is revoked as soon as `disposer` goes out of scope, which is when
 * either `link.click()` finishes or an error occurs somewhere.
 */

/*
// This code is intended for a browser environment
const downloadButton = document.getElementById("download-button");
const exampleBlob = new Blob(["example data"]);

downloadButton.addEventListener("click", () => {
  using disposer = new DisposableStack();
  const link = document.createElement("a");
  const url = disposer.adopt(
    URL.createObjectURL(exampleBlob),
    URL.revokeObjectURL,
  );

  link.href = url;
  link.download = "example.txt";
  link.click();
});
*/


/**
 * Automatically cancelling in-progress requests
 *
 * In the following example, we fetch a list of resources concurrently using `Promise.all()`.
 * `Promise.all()` fails and rejects the resulting promise as soon as one request failed;
 * however, the other pending requests continue to run, despite their results being inaccessible to the program.
 * To avoid these remaining requests needlessly consuming resources, we need to automatically cancel
 * in-progress requests whenever `Promise.all()` settles. We implement cancellation with an `AbortController`,
 * and pass its signal to every `fetch()` call. If `Promise.all()` fulfills, then the function returns
 * normally and the controller aborts, which is harmless because there's no pending request to cancel;
 * if `Promise.all()` rejects and the function throws, then the controller aborts and cancels all pending requests.
 */

async function getAllData(urls) {
  using disposer = new DisposableStack();
  const { signal } = disposer.adopt(new AbortController(), (controller) =>
    controller.abort(),
  );

  // Fetch all URLs in parallel
  // Automatically cancel any incomplete requests if any request fails
  const pages = await Promise.all(
    urls.map((url) =>
      fetch(url, { signal }).then((response) => {
        if (!response.ok)
          throw new Error(
            `Response error: ${response.status} - ${response.statusText}`,
          );
        return response.text();
      }),
    ),
  );
  return pages;
}