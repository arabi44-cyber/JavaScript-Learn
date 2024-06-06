const marvel_heros = ['thor', 'Ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// ... spread operator
const all_New_Heros = [...marvel_heros, ...dc_heros];
console.log(all_New_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_arrary = another_array.flat(Infinity);
console.log(real_another_arrary);

console.log(Array.isArray('Arabi'));
console.log(Array.from('Arabi'));
console.log(Array.from({ name: 'arabi' })); // intresting

let score1 = 200;
let score2 = 400;
let score3 = 500;
console.log(Array.of(score1, score2, score3));
