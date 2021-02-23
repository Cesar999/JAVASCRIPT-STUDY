console.log(typeof 999); // number
console.log(typeof 'this is a string'); // string
console.log(typeof false); // boolean
console.log(typeof undefined); //undefined
console.log(typeof null); // object because of the BUG
console.log(typeof Symbol('symbol')); // symbol
console.log(typeof {prop1: 'val1', prop2: 'val2'}); // object
console.log(typeof [1,2,3,4]); // object
console.log(typeof function(a, b){return a+b}); // function

console.log(typeof Infinity); // Number
console.log(typeof NaN); // Number
