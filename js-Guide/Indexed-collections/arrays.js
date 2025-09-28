// Creating an array

// const arr1 = new Array(element0, element1, /* ... , */ elementN);
// const arr2 = Array(element0, element1, /* ... , */ elementN);
// const arr3 = [element0, element1, /* ... , */ elementN];

// // const arr1 = new Array();
// console.log(arr1.length); // 0
// // const arr2 = Array();
// console.log(arr2.length); // 0
// // const arr3 = [];
// console.log(arr3.length); // 0

// const obj = {};

// obj.prop = [element0, element1, /* ... , */ elementN];

// Referring to array elements

// const myArray = ["Wind", "Rain", "Fire"];

// console.log(myArray[0]); // Wind
// console.log(myArray[1]); // Rain
// console.log(myArray[2]); // Fire
// console.log(myArray[3]); // undefined
// console.log(myArray.length)

// Populating an array

// const emp = [];

// emp[0] = "John";
// emp[1] = "Mary";
// emp[2] = "Peter";
// emp[4] = 34;

// console.log(emp);
// console.log(emp.length);

// const myVar = "World";

// const myArray = new Array("Hello", myVar, 3.14159);

// console.log(myArray);
// console.log(myArray.length);

// const myArray = ["Mango", "Apple", "Banana"];

// console.log(myArray);
// console.log(myArray.length);

// Understanding length

// const cats = [];
// cats[5] = "Dusty";
// cats[0] = "Misty";
// cats[1] = "Shadow";
// cats[2] = "Twiggy";
// cats[3] = "Sassy";
// cats[4] = "Sammy";
// console.log(cats.length); // 6
// console.log(cats)

// const cats = ["Dusty", "Misty", "Twiggy"];
// console.log(cats.length); // 3

// cats.length = 2;

// console.log(cats)
// console.log(cats.length); // 2

// cats.length = 0;
// console.log(cats);
// console.log(cats.length); // 0

// cats.length = 3;
// console.log(cats);
// console.log(cats.length); // 3

// Iterating over arrays

// const myArray = ["Mango", "Apple", "Banana"];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// const myArray = ["Mango", "Apple", "Banana"];

// myArray.forEach((fruit) => console.log(fruit));

// const sparseArray = ["first", "second", , "fourth"];

// sparseArray.forEach((element) => console.log(element));

// if (sparseArray[2] === undefined) {
//     console.log("sparseArray[2] is undefined");
// }

// const nonSparseArray = ["first", "second", undefined, "fourth"];

// nonSparseArray.forEach((element) => console.log(element));

// const div = document.getElementsByTagName("div");
// for (let i = 0, div; (div = div[i]); i++) {
//     console.log(div);
// }

// Array methods

// let myArray = ["1", "2", "3"];
// myArray = myArray.concat("a", "b", "c");
// console.log(myArray); // ["1", "2", "3", "a", "b", "c"]

// const myArray = ["Wind", "Rain", "Fire"];
// const list = myArray.join(" - ");
// console.log(list); // "Wind - Rain - Fire"

// const myArray = ["1", 2];
// myArray.push("hello", "3", 2323);

// console.log(myArray); // ["1", 2, "hello", "3", 2323]

// const myArray = ["1", 2, "hello", "3", 2323];
// myArray.pop();
// console.log(myArray); // ["1", 2, "hello", "3"]

// const myArray = ["1", "2", "3"];
// myArray.shift();
// console.log(myArray); // ["2", "3"]

// const myArray = ["1", "2", "3"];
// myArray.unshift("4", "5");
// console.log(myArray); // ["4", "5", "1", "2", "3"]

// let myArray = ["a", "b", "c", "d", "e"];
// myArray = myArray.slice(1, 4);
// console.log(myArray); // ["b", "c", "d"]

// const myArray = ["a", "b", "c", "d", "e"];
// console.log(myArray.at(-1)); // "e"
// console.log(myArray.at(-3)); // "c"

// const myArray = ["1", "2", "3", "4", "5"];
// myArray.splice(3, 0, "a", "b");
// console.log(myArray); // ["1", "2", "3", "a", "b", "4", "5"]

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months.length); // 5
// // Inserts at index 1
// console.log(months); // ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, "May");
// // Replaces 1 element at index 4
// console.log(months); // ["Jan", "Feb", "March", "April", "May"]
// console.log(months.length); // 5

// const myArray = ["1", "2", "3"];
// myArray.reverse();
// console.log(myArray); // ["3", "2", "1"]

// let myArray = [1, 2, [3, 4]];
// myArray = myArray.flat();
// console.log(myArray); // [1, 2, 3, 4]

// const myArray  = ["Wind", "Rain", "Fire"];
// myArray.sort();
// console.log(myArray); // ["Fire", "Rain", "Wind"]

// const myArray2 = [1, 30, 4, 21, 100000];
// myArray2.sort((a, b) => a - b);
// console.log(myArray2); // [1, 4, 21, 30, 100000]

// const myArray = ["Apple", "Orange", "Banana", "Mango", "Pineapple"];

// const sortFn = (a, b) => {
//     if (a[a.length - 1] < b[b.length - 1]) {
//         return -1;
//     } else if (a[a.length - 1] > b[b.length - 1]) {
//         return 1;
//     }
//     return 0;
// };

// myArray.sort(sortFn);
// console.log(myArray); // ["Mango", "Banana", "Orange", "Apple", "Pineapple"]

// const a = ["a", "b", "a", "z", "b", "a"];
// console.log(a.indexOf("b")); // 1
// console.log(a.lastIndexOf("z")); // 3


// const a = ["a", "b", "a", "z", "b", "a"];
// console.log(a.lastIndexOf("z")); // 3


// const a = ["a", "b", "c"];
// a.forEach((element) => console.log(element));


// const a1 = ["a", "b", "c"];
// const a2 = a1.map((item) => item.toUpperCase());
// console.log(a2); // ["A", "B", "C"]

// const a1 = ["a", "b", "c", "d", "e"];
// const a2 = a1.map((element) => {
//     console.log(element);
// })


// const a1 = ["A", "B", "C"];
// const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);

// console.log(a2); // ["A", "a", "B", "b", "C", "c"]


const a1 = ["a", "b", "c", "d", "e"];
const a2 = a1.flatMap((element) => {
    console.log(element);
})