class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username:${this.username}`);
  }

  static createId() {
    return `123`;
  }
}
const rabi = new User('rabi');
// console.log(rabi.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher('iphone', 'iphone@phone.com');
console.log(iphone.createId());
