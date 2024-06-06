// Immediately Invoked Function Expressions (IFFE)

(function chai() {
  // named IIFI
  console.log(`DB CONNECTED`);
})();

((name) => {
  // unnamed IIFI
  console.log(`DB CONNECTED TWO ${name}`);
})('King');
