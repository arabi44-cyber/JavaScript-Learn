const userEmail = [];

if (userEmail) {
  console.log('Got the user email');
} else {
  console.log("Don't have user emial");
}

// false values

// false, 0, -0, BigInt 0n, "",  null, undefined, NaN

//truthy values

// "0", 'false',  " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty")

// }

const myObj = {};

if (Object.keys(myObj).length === 0) {
  console.log('Object is empty');
}

// Nullish coalescing Operator (??) : null undefine

let val1;

// val1 = 4 ?? 20
// val1 = null ?? 10

// val1 = undefined ?? 44
val1 = null ?? 10 ?? 15;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80');
