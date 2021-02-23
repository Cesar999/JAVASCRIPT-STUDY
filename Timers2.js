for (let i=0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000);
}
//0 1 2 3 4 //Every value after one sec