// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (variable in object) 
//     statement

// function dumpProps(obj, objName) {
//     let result = "";
//     for (const i in obj) {
//         result += `${objName}.${i} = ${obj[i]}<br>`;
//     }
//     result += "<hr>";
//     return result;
// }

// console.log(dumpProps());

// for (variable of iterable)
//     statement


// for (const element of object) {
    
// }

// const arr =  [3, 5, 7];
// arr.foo = "hello";

// for (const i in arr) {
//     console.log(i);
// }

// for (const i of arr) {
//     console.log(i);
    
// }

const obj = {foo: 1, bar: 2};

for (const [key, val] of Object.entries(obj)) {
    console.log(key, val);
}