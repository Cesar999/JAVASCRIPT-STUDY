let obj = {x: 1, y: 2, z: 3};
console.log({a: 0, ...obj, x: 9});

let arr = [1,2,3,4,5];
let max = Math.max(...arr);
console.log(max);

function sum(a, ...b) {
    let sum = a;
    for(let num of b){
        sum += num;
    }
    console.log(sum);
    return;
}
sum(1,2,3,4,5,6);