const timer1 = setTimeout(()=>{
    console.log('Timer 1');
}, 1000);

let count = 0;

const timer2 = setInterval(()=>{
    console.log('Timer 2');
    count++;
    if(count>2) {
        clearTimeout(timer2);
    }
}, 1000);


