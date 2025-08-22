// For-Of Loop

const arr = [1, 2, 3, 4, 5];

// for (const i of arr) {
//     console.log(i);

// }

// const greetings = "Hello World!"
// for (const i of greetings) {
//     console.log(i);

// }

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, "=", value);
}

const myObject = {
    'game1': "BGMI",
    game2: "CHESS"
}

// for (const [key, value] of myObject) {
//     console.log(`${key} => ${value}`);
    
// }


