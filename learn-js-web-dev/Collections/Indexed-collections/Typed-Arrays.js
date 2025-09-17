// let f64a = new Float64Array(8);

// f64a[0] = 10;
// f64a[1] = 20;
// f64a[2] = f64a[0] + f64a[1];

// console.table(f64a)


// Floating point arrays.

// const f64 = new Float64Array(8);
// const f32 = new Float32Array(16);

// // Signed integer arrays.

// const i32 = new Uint32Array(16);
// const i16 = new Int16Array(32);
// const i8 = new Int8Array(64);

// // Unsigned integer arrays.
// const u32 = new Uint32Array(16);
// const u16 = new Uint16Array(32);
// const u8 = new Uint8Array(64);
// const pixels = new Uint8ClampedArray(64);

// u8[i] = Math.min(255, Math.max(0, u8[i] * gamma));

// WebGL

const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl')

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

var floatArray = new Float32Array([1,2,3,4,5,6,7,8]);
gl.bufferData(gl.ARRAY_BUFFER, floatArray);


var pixels = new Uint8Array(16*16*4);
gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    16, 16,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    pixels
);

var pixels = new Uint8Array(320*240*4);
gl.readPixels(0, 0, 320, 240, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
