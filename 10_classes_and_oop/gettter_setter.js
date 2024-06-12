class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}arabi`;
  }

  set password(value) {
    this._password = value;
  }
}
const arabi = new user('arabi@103.gamil.com', 'save');
console.log(arabi.password);
console.log(arabi.email);
