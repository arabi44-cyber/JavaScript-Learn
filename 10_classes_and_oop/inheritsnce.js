class User {
  constructor(username) {
    this.username = username;
  }
  LogMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teachers extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const smile = new Teachers('smiley', 'smile123@gmail.com', '1234');
smile.addCourse();
smile.LogMe();

const sad = new User('sad');
sad.LogMe();

console.log(smile instanceof User);
