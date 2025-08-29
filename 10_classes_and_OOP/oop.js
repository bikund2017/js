const user = {
  username: "bikund",
  loginCOunt: 1,
  signedIN: true,

  getUserDetails: function () {
    // console.log("Got user detail");
    // console.log(`Username: ${this.username}`);
    console.log(this);
    
    
  },
};

// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, signedIN) {
    this.myuserame = username
    this.loginCount = loginCount
    this.signedIN = signedIN;

    return this
}

const userOne = new User("bikund", 12, true)
const userTwo = new User("tushar", 10, false)
console.log(userTwo);
