class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createID() {
    return `123`;
  }
}

const bikund = new User("bikund");

// console.log(bikund.createID());

 class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
 }


 const iphone  = new Teacher("iphone", "abc@gmail.com")

 console.log(iphone.createID());
 
// iphone.logMe()
 