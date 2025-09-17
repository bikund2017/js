// let a = 10
// const b = 20
// var c = 30

let a = 200;

if (true) {
  let a = 10;
  const b = 20;

  //   console.log("INNER:" ,a);
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "bikund";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website);

  //   two()
}

// one()

if (true) {
  const username = "bikund";
  if (username === "bikund") {
    const website = " youtube";
    // console.log(username + website);
  }

  // console.log(website);
}

// console.log(username);

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

// addOne(5)
// console.log(addOne(5));

// console.log(addTwo(5)); // throw error beacause hamne variable me function ko declare kiya hai 

const addTwo = function (num) {
    return num + 2;
}

// addTwo(5)
// console.log(addTwo(5));f

