const myArray = ['a', 'b', 'c', 'x', 'y', 'z'];

console.log(myArray.indexOf('c')); // 2
console.log(myArray.indexOf('d')); // -1

console.log(myArray.includes('x')); // true
console.log(myArray.includes('w')); // false

console.log('a,b,c,x,y,z'.split(','));
console.log(myArray.join('-'));

console.log(myArray.reverse(), myArray); // alters original array

console.log(['a', 'b', 'c'].concat(['x', 'y', 'z']));

const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr2.fill('w', 3, 6), arr2);  // alters original array
