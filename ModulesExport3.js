let hi = "Greetings";
let bye = "Farewell";

function sayHi(){
    console.log(hi);
}
function sayBye(){
    console.log(bye);
}

function updateHi(text){
    hi = text;
}

function updateBye(text){
    bye = text;
}

export {sayHi, sayBye, hi, bye, updateHi, updateBye};