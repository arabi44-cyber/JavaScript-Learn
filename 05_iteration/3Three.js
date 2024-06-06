// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}

const greeting = 'Hello Worlds!';
for (const greet of greeting) {
  // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map();

map.set('IN', 'India');
map.set('NEP', 'Nepal');
map.set('FR', 'France');

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

// for (const key in map) {
//     console,log(key)
// }

const myObject = {
  game1: 'NFS',
  game2: 'spirerman',
};

// for (const [key, value] of myObject) {
//      console.log(key, ':-', value);

//  }
