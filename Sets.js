const set1 = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log(set1.add(6));
console.log(set1.has(6));
console.log(set1.delete(6));
console.log(set1.has(6));
console.log(set1);
console.log(Array.from(set1));
set1.clear()
console.log(set1);