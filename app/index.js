/*
FIRST - variables type & arrow functions
*/
const calc = require('./calc');
const numbersToAdd = [3, 4, 12, 3];

const result = calc.sum(numbersToAdd);
console.log(`The result is: ${result}`);

/*
SECOND - default parameters
*/
const price = 500;
const tax = 0.5;
console.log(`The final price is: ${calc.getFinalPrice(price)}`);
console.log(`The final price is: ${calc.getFinalPrice(price, tax)}`);

/*
THIRD - spread/rest operator
*/
let arr = [1, 2, 3, 4, 5];
console.log(...arr);
console.log(calc.restArray(...arr));

/*
FOURTH - expand the capabilities of object literals
*/
let dog = calc.getDog('Spitz', 'Max', '1', '6 000');
console.log(dog);
console.log(dog);