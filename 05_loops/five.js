const coding = ["js", "ruby", "java", "cpp", "rust"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((val) => {
//   console.log(val);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);

// } )

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    // name: "Bikund",
    // age: 20,
    languageName: "C++",
    languageFileName: "cpp"
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
