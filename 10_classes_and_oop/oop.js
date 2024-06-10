const user = {
  username: 'rabi',
  logincount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log('Got user detilas form Database');
    // console.log(`Username:${this.username}`);
    console.log(this);
  },
};

//
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = () => {
    console.log(`Welcome${this.username}`);
  };
  return this;
}
const userOne = new User('arabi', 6, true);
const userTwo = new User('basnet', 20, false);
console.log(userOne.constructor);
// console.log(userTwo);
