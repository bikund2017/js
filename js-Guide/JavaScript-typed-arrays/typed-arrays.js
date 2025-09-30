/**
 * Buffers
 *
 * There are two types of buffers: ArrayBuffer and SharedArrayBuffer. Both are low-level representations of a memory span. They have "array" in their names, but they don't have much to do with arrays — you cannot read or write to them directly. Instead, buffers are generic objects that just contain raw data. In order to access the memory represented by a buffer, you need to use a view.
 *
 * Buffers support the following actions:
 *
 * Allocate: As soon as a new buffer is created, a new memory span is allocated and initialized to 0.
 * Copy: Using the slice() method, you can efficiently copy a portion of the memory without creating views to manually copy each byte.
 * Transfer: Using the transfer() and transferToFixedLength() methods, you can transfer ownership of the memory span to a new buffer object. This is useful when transferring data between different execution contexts without copying. After the transfer, the original buffer is no longer usable. A SharedArrayBuffer cannot be transferred (as the buffer is already shared by all execution contexts).
 * Resize: Using the resize() method, you can resize the memory span (either claim more memory space, as long as it doesn't pass the pre-set maxByteLength limit, or release some memory space). SharedArrayBuffer can only be grown but not shrunk.
 * The difference between ArrayBuffer and SharedArrayBuffer is that the former is always owned by a single execution context at a time. If you pass an ArrayBuffer to a different execution context, it is transferred and the original ArrayBuffer becomes unusable. This ensures that only one execution context can access the memory at a time. A SharedArrayBuffer is not transferred when passed to a different execution context, so it can be accessed by multiple execution contexts at the same time. This may introduce race conditions when multiple threads access the same memory span, so operations such as Atomics methods become useful.
 */

// Views

// const uint8 = new Uint8Array([1, 2, 3]);
// console.log(uint8[0])

// uint8[-1] = 0;
// uint8[2.5] = 0;
// uint8[NaN] = 0;
// console.log(Object.keys(uint8))
// console.log(uint8[NaN]);

// uint8[true] = 0;
// console.log(uint8[true]);

// Object.freeze(uint8);

// DataView

// function toBinary(
//   x,
//   { type = "Float64", littleEndian = false, separator = " ", radix = 16 } = {}
// ) {
//   const bytesNeeded = globalThis[`${type}Array`].BYTES_PER_ELEMENT;
//   const dv = new DataView(new ArrayBuffer(bytesNeeded));
//   dv[`set${type}`](0, x, littleEndian);
//   const bytes = Array.from({ length: bytesNeeded }, (_, i) =>
//     dv
//       .getUint8(i)
//       .toString(radix)
//       .padStart(8 / Math.log2(radix), "0")
//   );
//   return bytes.join(separator);
// }

// console.log(toBinary(1.1));
// console.log(toBinary(1.1, { littleEndian: true }));
// console.log(toBinary(20, { type: "Int8", radix: 2 }));

// Web APIs using typed arrays

// Using views with buffers

// const buffer = new ArrayBuffer(16);

// if (buffer.byteLength === 16) {
//     console.log("Yes, it is 16 bytes.");
// } else {
//     console.log("No, it is not 16 bytes.");
// }

// create a view

// const int32view = new Int32Array(buffer);

// for (let i = 0; i < int32view.length; i++) {
//     int32view[i] = i * 2;
//     console.log(`Entry ${i}: ${int32view[i]}`)
// }

// Multiple views on the same data

// const int16View = new Int16Array(buffer);

// for (let i = 0; i < int16View.length; i++) {
//     console.log(`Entry ${i}: ${int16View[i]}`)
// }

// int16View[0] = 32;
// console.log(`Entry 0 in the 32-bit array is now ${int32view[0]}`)

// const flot32View = new Float32Array(buffer);
// console.log(flot32View[0]);

// Reading text from a buffer

// const buffer = new ArrayBuffer(8);
// const uint8 = new Uint8Array(buffer);
// uint8.set([228, 189, 160,229, 165, 189]);
// const text = new TextDecoder().decode(uint8);

// console.log(text);

// Working with complex data structures

// C structures
// struct someStruct {
//     unsigned long id;
//     char username[16];
//     float amountDue;
// };

// const buffer = new ArrayBuffer(24);

// // read the data into the buffer

// const idView = new Uint32Array(buffer, 0, 1);
// const usernameView = new Uint8Array(buffer, 4, 16);
// const amountDueView = new Float32Array(buffer, 20 , 1);

// console.log(amountDueView[0])

// Conversion to normal arrays

// const typedArray = new Uint8Array([1, 2, 3, 4]);
// const normalArray = Array.from(typedArray);

// console.log(normalArray);

// spread syntax

// const typedArray = new Uint8Array([1, 2, 3, 4]);
// const normalArray = [...typedArray];

// console.log(normalArray);

// Appending new content for learning purposes.

// A closer look at TypedArray views

/*
There are several types of TypedArray views, each corresponding to a different numeric type. They all have the same methods and properties, but they differ in the size of the elements and the way they handle values (signed vs. unsigned, integer vs. floating-point).

Here is a list of the available TypedArray constructors:

- Int8Array: 8-bit signed integer
- Uint8Array: 8-bit unsigned integer
- Uint8ClampedArray: 8-bit unsigned integer (values are clamped to the range 0-255)
- Int16Array: 16-bit signed integer
- Uint16Array: 16-bit unsigned integer
- Int32Array: 32-bit signed integer
- Uint32Array: 32-bit unsigned integer
- Float32Array: 32-bit floating-point number
- Float64Array: 64-bit floating-point number (double)
- BigInt64Array: 64-bit signed integer (BigInt)
- BigUint64Array: 64-bit unsigned integer (BigInt)
*/

// Example: Different views on the same buffer
const buffer = new ArrayBuffer(8);

const int8 = new Int8Array(buffer);
int8[0] = 42;

const uint16 = new Uint16Array(buffer);
// This will be different depending on the endianness of the system.
// On a little-endian system, the first 8 bits are 42, and the next 8 are 0.
// So the 16-bit unsigned integer is 42.
console.log(uint16[0]); // 42 on little-endian

const float32 = new Float32Array(buffer);
// The bits that represent the integer 42 will be interpreted as a float.
console.log(float32[0]); // A very small number, e.g., 5.885411113353634e-44

// ---

// Advanced DataView usage

// DataView allows you to read and write multi-byte numbers from a buffer
// with control over the endianness. This is crucial when dealing with
// network protocols or binary file formats that specify a certain byte order.

const bufferForDataView = new ArrayBuffer(4);
const dv = new DataView(bufferForDataView);

// Write a 32-bit unsigned integer in little-endian format
dv.setUint32(0, 0x12345678, true); // The 'true' means little-endian

// Read the bytes to see the order
const bytes = new Uint8Array(bufferForDataView);
console.log(bytes.map((b) => b.toString(16).padStart(2, "0")).join(" ")); // "78 56 34 12"

// Now write the same number in big-endian format (the default)
dv.setUint32(0, 0x12345678, false);

console.log(bytes.map((b) => b.toString(16).padStart(2, "0")).join(" ")); // "12 34 56 78"

// ---

// Typed Arrays with Web APIs: Canvas example

// Typed arrays are often used with the HTML5 canvas element for performance-critical
// image manipulation. The `getImageData()` method returns an ImageData object
// containing a `Uint8ClampedArray`.


// This code should be run in a browser with a canvas element
const canvas = document.getElementById('myCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    // Create a 100x100 black square
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 100, 100);

    // Get the image data
    const imageData = ctx.getImageData(0, 0, 100, 100);
    const data = imageData.data; // This is a Uint8ClampedArray

    // The data is a flat array of RGBA values for each pixel.
    // data[0] = R, data[1] = G, data[2] = B, data[3] = A for the first pixel.

    // Let's manipulate the image data: turn the black square into a red one.
    for (let i = 0; i < data.length; i += 4) {
        data[i] = 255; // Red channel
        // data[i + 1] = 0; // Green channel (already 0)
        // data[i + 2] = 0; // Blue channel (already 0)
        // data[i + 3] = 255; // Alpha channel (fully opaque)
    }

    // Put the modified data back onto the canvas
    ctx.putImageData(imageData, 0, 0);
}

