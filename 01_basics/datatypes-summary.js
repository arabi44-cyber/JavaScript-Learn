// primitive

// 7 types :String, number, boolearn, null, undefined, symbol, BigInt,

const scrore = 100;
const scrorevaue = 1000.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);
// const bigNumber = 938293292392283n

// Refrence (Non-Primitive)

// Array, Objects, Functions

const heros = [' shaktiman', 'naajraj', 'king'];

let myObj = {
  name: 'arabi',
  age: 22,
};
const myFunction = function () {
  // console.log("Hello World")
};

console.log(typeof heros);
myFunction();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myChannel = 'arabiHello';

let anothername = 'hello';

console.log(myChannel);
console.log(anothername);

//
let userone = {
  email: 'hello@gmail.com',
  npi: 'user@13',
};
let usertwo = userone;

usertwo.email = 'raju102@gmail.com';

console.log(userone.email);
console.log(usertwo.email);
