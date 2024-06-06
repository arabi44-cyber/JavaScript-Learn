const user = {
  username: 'arabi',
  price: 999,

  welcomeMessgae: function () {
    //  console.log(`${this.username} , welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessgae()
// user.username = "ram"
// user.welcomeMessgae()

//  console.log(this);

//  function chai(){
//    let username = "arabi"
//    console.log(this.username);
//  }

//  chai()

// const chai = function () {
//    let username = "rabi"
//    console.log(this.username);
// }

// const chai = () => {
//    let username = "rabi"
//    console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//    return num1 + num2

// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 ) // no return used

const addTwo = (num1, num2) => ({ username: 'arabi' }); // no return used

console.log(addTwo(2, 6));

const myArray = [2, 4, 5, 5, 6];

myArray.forEach();
