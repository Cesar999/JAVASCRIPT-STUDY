const str1 = 'cesar@hotmail.com';
const str2 = 'leslie@hotmail.com.mx';
const re1 = new RegExp(/^cesar/, 'ig');
const re2 = new RegExp(/\.com$/, 'ig');

console.log(str1.match(re1));
console.log(str1.match(re2));
console.log(str2.match(re1));
console.log(str2.match(re2));

const re3 = new RegExp(/One Ring/, 'ig');
const str3 = 'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.';
console.log(str3.match(re3));

const re4 = new RegExp(/\d{10}/, 'ig');
const str4 = 'My social security number is 9936592 and my phone number is 7141743289';
console.log(str4.match(re4));
