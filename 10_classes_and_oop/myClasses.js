// //ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptpassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User('rabi', 'rabi1000@gmail.com', '1234');

// // console.log(chai);
// console.log(chai.changeUsername());
// console.log(chai.encryptpassword());

// behind the scene
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptpassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new User('happy', 'hayypu1016@gamil.com', '1245');
console.log(tea.changeUsername());
console.log(tea.encryptpassword());
