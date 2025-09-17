let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 7, 19)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date("2025-07-19")

let myCreatedDate = new Date("08-19-2025");

// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth());

newDate.toLocaleString("default", {
  weekday: "long",
});
