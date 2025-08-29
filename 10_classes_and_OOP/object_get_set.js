const User = {
  _email: "abc@gmail.com",
  _password: "asvs232",

  get email() {
    return this._email.toUpperCase();
  },
  set(value) {
    this._email = value.toUpperCase();
  },
};


const objclass = Object.create(User)

console.log(objclass.email)