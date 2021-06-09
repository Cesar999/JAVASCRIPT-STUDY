if(true && true) {
    console.log('true AND true', ''); // true
}
if(true && false) {
    console.log('true AND false'); // false
}
if(false && false) {
    console.log('false AND false'); // false
}

if(true || true) {
    console.log('true OR true'); // true
}
if(true || false) {
    console.log('true OR false'); // true
}
if(false || false) {
    console.log('false OR false'); // false
}


console.log(true && true?'Terniary: true:':'Terniary: false', 'true && true');
console.log(true && false?'Terniary: true:':'Terniary: false', 'true && false');
console.log(true || true?'Terniary: true:':'Terniary: false', 'true || true');
console.log(true || false?'Terniary: true:':'Terniary: false', 'true || false');