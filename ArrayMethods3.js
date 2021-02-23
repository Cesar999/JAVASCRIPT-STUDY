const myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray.findIndex(x=>x%5===0)); // returns index
console.log(myArray.find(x=>x%5===0)); // returns value

console.log(myArray.some(x=>x>5)); // at least 1 is greater than 5 - true
console.log(myArray.some(x=>x>7)); // at least 1 is greater than 7 - false

console.log(myArray.every(x=>x>0)); // every value is greater than 0 - true
console.log(myArray.every(x=>x>1)); // every value is greater than 1 - false
