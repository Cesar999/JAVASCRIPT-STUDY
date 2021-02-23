function doThis(callback) {
    setTimeout(()=>{
        console.log('Do this first');
        callback();
    },2000);
}
function andThenThis() {
    setTimeout(()=>{
        console.log('and then this');
    },2000);
}

doThis(andThenThis);