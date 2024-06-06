// Singleton

// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = 'abc124';
tinderUser.name = 'arrmy';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
  email: 'example@gmail.com',
  fullName: {
    userFullname: {
      firstname: 'hariRam',
      lastname: 'Basnet',
    },
  },
};

// console.log(regularUser.fullName.userFullname.firstname);

const Obj1 = { 1: 'q', 2: 'y' };
const Obj2 = { 3: '5', 5: '7' };
const Obj4 = { 6: 'b', 4: '6' };

const obj3 = { Obj1, Obj2 };
// const obj3 = Object.assign({}, Obj1, Obj2, Obj4)
// const obj3 = {...Obj1, ...Obj2, ...Obj4}
// console.log(obj3)

const users = [
  {
    id: 1,
    name: 'arabi',
  },
  {
    id: 2,
    name: 'rabi',
  },
  {
    id: 3,
    name: 'abi',
  },
];
//  console.log(users[0].name);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  courseName: 'CyberSecurity',
  price: '1999',
  courseInstructor: 'Rabi',
};

// couurse.courseInstructor

const { courseInstructor: instructor } = course;
// console.log(courseInstructor);
console.log(instructor);

// json file
// {
//     "name": "arabi",
//     "courseprice": "cybersecurity",
//     "price": "$100"
// }

// object inside the arrray
[{}, {}, {}];
