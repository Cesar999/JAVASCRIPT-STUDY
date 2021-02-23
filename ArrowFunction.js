const sum = (x, y) => {
    console.log(this);
    return x + y;
}

console.log(sum(6, 3));

const sayHi = text => console.log(text);
sayHi('Hello World!');
