const numbers = [51, 33, 2021, 6, 100, 458];
const chars = ['a', 'z', 'c', 'x', 'y', 'b'];
const strings = ['DEC', 'NOV', 'OCT', 'SEP', 'AUG', 'JUL'];

console.log(numbers.sort());
console.log(chars.sort());
console.log(strings.sort());

console.log(numbers.sort((a,b)=>{
    if(a<b){
        return -1;
    } else {
        return 1;
    }
}));

console.log(numbers.sort((a,b)=>{
    if(a>b){
        return -1;
    } else {
        return 1;
    }
}));

const objects = [
    {name: 'Ricardo', age: 3},
    {name: 'Cesar', age: 28},
    {name: 'Rafael', age: 1},
    {name: 'Leslie', age: 29}
];

console.log(objects.sort((a,b)=>{
    if(a.age>b.age){
        return -1;
    } else {
        return 1;
    }
}));
