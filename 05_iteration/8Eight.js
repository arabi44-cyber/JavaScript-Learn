const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function( acc, currval){
//     console.log(`acc: ${acc} and currval:${currval}`)
//     return acc + currval

// }, 3)

// console.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: 'js course',
    price: 2999,
  },
  {
    itemName: 'py course',
    price: 999,
  },
  {
    itemName: 'Ethical Hacking course',
    price: 5999,
  },
  {
    itemName: 'AI course',
    price: 7999,
  },
];

const priceTOpay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTOpay);
