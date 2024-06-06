const accountID = 12345;
let accountEmail = 'arabi107@gmail.com';
var accountpassword = '23342';
let accountCity = 'Butwal';

let accountstate;

// accountID = 2 // not allowed

accountEmail = 'hc@gmail.com';
accountpassword = '1212';
accountCity = ' kathmandu';

console.log(accountID);
/*
prefer not to use var
because of issue on block scope and functional scope  
*/
console.table([
  accountID,
  accountEmail,
  accountpassword,
  accountCity,
  accountstate,
]);
