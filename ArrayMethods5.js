
// substring and substr are only for Strings
const myString = 'Cesar_Encinas';
console.log('A - ', myString.substring(0, 5)); // Cesar
console.log('B - ', myString.substring(5, 6)); // _
console.log('C - ', myString.substring(5, 0)); // Cesar

console.log('D - ', myString.substr(0, 5)); // Cesar
console.log('E - ', myString.substr(5, 1)); // _
console.log('F - ', myString.substr(5, 0)); // 
console.log('G - ', myString.substr(6)); // Encinas

console.log('------------------------------');

// slice and splice can be use on Strings an Arrays
const myArray = myString.split('');
console.log('H - ', myArray.slice(0, 5)); // [ 'C', 'e', 's', 'a', 'r' ]
console.log('I - ', myArray.slice(5, 6)); // [ '_' ]
console.log('J - ', myArray.slice(5, 0)); // []

myArray.splice(5, 1, '@');
console.log('K - ', myArray); // Insert 1 element and removes 1

myArray.splice(5, 0, '@');
console.log('L - ', myArray); // Insert the value in position

myArray.splice(5, 9, '#', '&', '$');
console.log('M - ', myArray); // Replaces 9 elements from the 5th index


