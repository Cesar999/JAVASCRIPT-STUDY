const myArray = [1, 2, 3, 4, 5, 6];

console.log(myArray.filter(x => x%3 === 0));
console.log(myArray.map(x => x*2));
console.log(myArray.reduce((acc, current) => acc + current));

myArray.forEach(x => {
    console.log('Val:', x);
});

