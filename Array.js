var array = [1, 2, 3, 4];

console.log(array.length, ' - length');
console.log(array[0], ' - first')
console.log(array[array.length-1], ' - last');

console.log(array, ' - original');

array.unshift('x');
console.log(array, ' - unshift');

array.shift();
console.log(array, ' - shift');

array.push('y');
console.log(array, ' - push');

array.pop();
console.log(array, ' - pop');
