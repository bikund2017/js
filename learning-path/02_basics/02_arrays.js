const cityNames = ["Noida", "Delhi", "Patna", "Banglore", "Pune"];
const state = [
  "Delhi",
  "Uttar-Pradesh",
  "Kerala",
  "Himachal-Pradesh",
  "Karnataka",
];

// cityNames.push(state)

// console.log(cityNames);
// console.log(cityNames[5][0]);

// console.log(state);

// const state_city = cityNames.concat(state)

// console.log(state_city);

const state_city = [...cityNames, ...state];

// console.log(state_city);

const country = [
  "india",
  "china",
  "bangladesh",
  ["United States Of America", "Russia", "North Korea", "Taiwan"],
  "Bhutan",
  "Austria",
  ["Georgia", "Canada", "Brazil", "Iran"],
];

// const new_Country = country.flat(Infinity);


// console.log(country);

// console.log(new_Country);

// console.log(Array.isArray("Bikund"))
// console.log(Array.from("Bikund"))

// console.log(Array.from({
//     name: "bikund"
// }))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  



