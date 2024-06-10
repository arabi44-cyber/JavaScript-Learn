const promisesOne = new Promise((resolve, reject) => {
  //do and async task
  // db calls, crytography, networkcall
  setTimeout(() => {
    console.log('Async task is compelete');
    resolve();
  }, 1000);
});

promisesOne.then(() => {
  console.log('promise consumed');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2');
    resolve();
  }, 1000);
}).then(() => {
  console.log('Ayync 2 resoved');
});

const promisethree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: 'Arabi', emial: 'abc@gmail.com' });
  }, 1000);
});

promisethree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setInterval(() => {
    let err = false;
    if (!err) {
      resolve({ userName: 'arabi', password: '1234' });
    } else {
      reject('ERROR: Something went worng');
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('The promise is either resolved or rejected');
  });

const promiseFive = new Promise((resolve, reject) => {
  setInterval(() => {
    let err = true;
    if (!err) {
      resolve({ userName: 'javascript', password: '1234' });
    } else {
      reject('ERROR: JS went worng');
    }
  }, 1000);
});

// async function consumePromiseFive() {
//   try {
//     const respons = await promiseFive;
//     console.log(respons);
//   } catch (error) {
//     console.log('error');
//   }
// }
// consumePromiseFive();

// async function getAllUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response)
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('E: error');
//   }
// }
// getAllUser();

// fetch('https://jsonplaceholder.typicode.com/users')
//   .than((respons) => {
//     return respons.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
