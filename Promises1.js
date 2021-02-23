const p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log('Do this');
        res();
    }, 1000);
})
.then((val)=>{
    setTimeout(()=>{
        console.log('Then this');
    }, 1000);
});
