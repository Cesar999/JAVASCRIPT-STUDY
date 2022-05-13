var temp = 'Greetings';
var iife = (function(){
    var temp = 'Hello World';
    console.log(temp);
    return temp;
})();
console.log(temp);
console.log(iife);
