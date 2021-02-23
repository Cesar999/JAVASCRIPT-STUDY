if(true && true) {
    console.log('True AND true', ''); // true
}
if(true && false) {
    console.log('True AND false'); // false
}
if(false && false) {
    console.log('True AND false'); // false
}

if(true || true) {
    console.log('True OR true'); // true
}
if(true || false) {
    console.log('True OR true'); // true
}
if(false || false) {
    console.log('True OR true'); // false
}


console.log(true && true?'Terniary: true:':'Terniary: false', 'true && true');
console.log(true && false?'Terniary: true:':'Terniary: false', 'true && false');
console.log(true || true?'Terniary: true:':'Terniary: false', 'true || true');
console.log(true || false?'Terniary: true:':'Terniary: false', 'true || false');