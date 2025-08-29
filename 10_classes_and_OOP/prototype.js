// let myName = "bikund     "
// let myCh = "chai    "

// console.log(myName.trueLength);

let city = ["noida", "new delhi"];

let state = {
  noida: "Uttar-Pradesh",
  "new delhi": "Delhi",

  getNoida: function () {
    console.log(`noida state is ${this.noida}`);
  },
};

Object.prototype.bikund = function () {
  console.log(`bikund is present in all object`);
};

Array.prototype.heyBikund = function () {
  console.log(`bikund say hello`);
};
// state.bikund()
// city.bikund()
// city.heyBikund()
// state.heyBikund()

// inheritance

const User  = {
    name: "bikund",
    email: "abc@gmail.com"
}

const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport
};

Teacher.__proto__ = User

// modern syntx

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName  = "Tushar              "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
    
}

anotherUserName.trueLength()
"bikund".trueLength()
"iceTea".trueLength()