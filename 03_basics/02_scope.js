// var c = 444

let a = 900;

if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ",a);
}

// console.log(a);
//  console.log(b);
//  console.log(c);

function one() {
  const username = 'Rabi';

  function two() {
    const website = 'youtube';
    console.log(username);
  }
  // console.log(website)

  two();
}

// one()

if (true) {
  const username = 'Rabi';
  if (username === 'Rabi') {
    const website = ' youtube';
    // console.log(username + website)
  }
  // console.log(website)
}
// console.log(username)

// ++++++++++++++++++++++++++ Interesting +++++++++++++

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

addTwo(6);
const addTwo = function (num) {
  return num + 2;
};
