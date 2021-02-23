var a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20
console.log(rest);
// expected output: [30,40,50]

var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); // 42
console.log(q); // true

var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
console.log(foo); // 42 
console.log(bar); // true

var {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa); // 3
console.log(bb); // 5