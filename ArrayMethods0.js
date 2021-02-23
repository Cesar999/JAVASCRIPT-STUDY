console.log(Array.from('Cesar'));
console.log(Array.from([1,2,3], x => x * 2)); 

console.log(Array.isArray('Cesar')); // false
console.log(Array.isArray([1,2,3])); // true

console.log([1,[2,[3,4],5], 6, [7, 8]].flat());

