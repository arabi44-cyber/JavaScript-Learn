// let myName = 'kingArabi    ';

// console.log(myName.truelength);

let myHeros = ['thor', 'Batman', 'Spiderman'];

let heroPowers = {
  thor: 'hammer',
  Batman: 'flying',
  Spiderman: 'sling',
  getSpiderPower: function () {
    console.log(`spidey power is ${this.Spiderman}`);
  },
};

Object.prototype.arabi = () => {
  console.log(`arabi is presnet all objects`);
};

Array.prototype.heyArabi = () => {
  console.log(`arabi say hello`);
};

// heroPowers.arabi();
// heroPowers.heyArabi();
// myHeros.heyArabi();

// inheritance

const user = {
  name: 'tea',
  email: 'tea123@gamil.com',
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupoort = {
  makeAssigemnet: 'JS assigement',
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

// morden synatx
Object.setPrototypeOf(TeachingSupport, Teacher);
let anotherUsername = 'ArabiBasnet    ';

String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is:${this.trim().length}`);
};

// anotherUsername.trueLength();
// 'arabi  '.trueLength();
'arabibasnetdang'.trueLength();
