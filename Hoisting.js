x = 1;

// FUNCTION SCOPE
function print(){
    var x = 999;
    console.log('x: ', x);
    console.log('w: ', w);
    // console.log('y: ', y); // error
}

print();

w = 100;
var w;

let y;
const z = 3;
y = 2;

console.log('x: ', x);
console.log('y: ', y);
console.log('z: ', z);

console.log('-------------');
//---------------------
// BLOCK SCOPE
var a = 10;
let b = 20;
if(true){
    var a = 40;
    let b = 30;
}
console.log('a: ', a);
console.log('b: ', b);