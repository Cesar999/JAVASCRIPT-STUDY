// Primitives are pass by Value
var x1 = 5;
var y1 = 4;

function passByValue(x, y){
    x += y;
    return x;
}

console.log(passByValue(x1, y1), x1);

//----------------------------

// Arrays and Objects are pass by reference
var a1 = [1];
var b1 = [3];

function passByReference(a, b){
    a[0] += b[0];
    return a;
}

console.log(passByReference(a1, b1), a1);