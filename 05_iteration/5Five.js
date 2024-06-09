console.log('arabi44-cyber');
const coding = ['js', 'python', 'ruby', 'java'];

// coding.forEach(function (item) {
//     console.log(item);
// } )

coding.forEach((value) => {
  // console.log(value);
});

//  function printMe (item) {
//     console.log(item);

//  }

//  coding.forEach(printMe)

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: 'Javascript',
    languageFileName: 'js',
  },
  {
    languageName: 'Java',
    languageFileName: 'java',
  },
  {
    languageName: 'python ',
    languageFileName: 'py',
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageFileName);
  console.log(item.languageName);
});
