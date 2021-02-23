const str = 'Something random about random topics on a random day';

const re1 = new RegExp(/random/, 'ig');
const re2 = new RegExp(/a/, 'ig');
const re3 = new RegExp(/ran/, 'ig');

console.log(str.match(re1));
console.log(str.replace(re1,'interesting'));

console.log(re1.test(str));
console.log(re1.exec(str));