var array = [1, 2, 3, 4];

console.log(array.length, ' - length');
console.log(array[0], ' - first')
console.log(array[array.length-1], ' - last');

console.log(array, ' - original');

array.unshift('x'); // inserts element at the begining (left)
console.log(array, ' - unshift');

array.shift(); // removes element at the begining (left)
console.log(array, ' - shift');

array.push('y'); // inserts element at the end (right)
console.log(array, ' - push');

array.pop(); // removes element at the end (right)
console.log(array, ' - pop');
