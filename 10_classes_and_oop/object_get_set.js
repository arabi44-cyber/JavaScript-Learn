const User = {
  _email: 'apple@123.com',
  _password: 'abc',

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const lasi = Object.create(User);
console.log(lasi.email);
