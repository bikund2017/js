function SetUsername(username) {
  this.username = username;

  console.log(`called`);
  
}

function createUser(username, email, password) {

  SetUsername.call(this, username);
//   this.username = username
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "abc@gmail.com", 123)
console.log(chai);

