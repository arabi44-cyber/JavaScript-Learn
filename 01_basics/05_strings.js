const name = "arabi"
const repoCount = 50

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('ara.bi');
//console.log(gameName[0]);
//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('i'));


// console.log(gameName.split('.'));

const newString = gameName.substring(0, 3)
console.log(newString)

const anotherString = gameName.slice(-5, 4)
console.log(anotherString)

const newStringoOne = "    Nepal    "
console.log(newStringoOne)
console.log(newStringoOne.trim())

const url = "https://hello.com/arabi%20king"
console.log(url.replace('%20','-'))

console.log(url.includes('hello'))
console.log(url.includes('how'))

