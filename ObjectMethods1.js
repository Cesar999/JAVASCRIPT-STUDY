// assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

// has own property
function Foo() {
    this.propname = 'test';
}
Foo.prototype.inheritedprop = 'test';
var bar = new Foo();
console.log(bar.hasOwnProperty('propname')); // returns true
console.log(bar.hasOwnProperty('inheritedprop')); // returns false