function makeAdder() {
    let counter = 0;
    function add(y) {
        counter += y; 
        return 'count: ' + counter;
    }
    return add;
};
let addX = makeAdder();
console.log(addX(1));  
console.log(addX(1));
console.log(addX(1));  
