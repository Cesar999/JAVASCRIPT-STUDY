
const p1 = new Promise((res,rej) =>{
    console.log('Promise 1');
    res();
});

setTimeout(()=>{
    console.log('Timer 1');
}, 0);

setTimeout(()=>{
    console.log('Timer 2');
}, 0);

const p2 = new Promise((res,rej) =>{
    console.log('Promise 2')
     res();
});