function* generator(i) {
    yield i;
    yield i + 3;
    yield i - 3;
    yield i * 3;
    yield i / 3;
}
let gen = generator(3);
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 6, done: false }
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 9, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }