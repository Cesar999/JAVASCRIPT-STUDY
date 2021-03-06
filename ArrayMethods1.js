const myArray = ['a', 'b', 'c', 'x', 'y', 'z'];

console.log(myArray.indexOf('c'));
console.log(myArray.indexOf('d'));

console.log(myArray.includes('x'));
console.log(myArray.includes('w'));

console.log('a,b,c,x,y,z'.split(','));
console.log(myArray.join('-'));

console.log(myArray.reverse(), myArray); // alters original array

console.log(['a', 'b', 'c'].concat(['x', 'y', 'z']));

const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr2.fill('w', 3, 6), arr2);  // alters original array
