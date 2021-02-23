const greedy = new RegExp(/aab+/, 'ig');  
const lazy = new RegExp(/aab+?/, 'ig');
const str1 = 'aabbb';

console.log(str1.match(greedy));
console.log(str1.match(lazy));
