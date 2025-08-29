class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    return (this._email = value.toUpperCase());
  }

  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
}

const bikund = new User("bikund@gmail.com", 1234);

console.log(bikund.password);
console.log(bikund._email);
