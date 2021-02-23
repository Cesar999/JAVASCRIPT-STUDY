const array = ['a', 'b', 'c', 'd'];
const obj = {'w':0, 'x': 1, 'y': 2, 'z': 3};

for(let x of array){
    console.log(x);
}

console.log('-----------------------------');

for(let x in obj){
    console.log(x);
}