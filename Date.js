import { hrtime } from 'process';

console.log(Date.now());
console.log(new Date().getDay());
console.log(new Date().getTime());
console.log(new Date().getMilliseconds());
console.log(new Date().getSeconds());
console.log(new Date().getMinutes());
console.log(new Date().getHours());
console.log(new Date().getDate());
console.log(new Date().getMonth());
console.log(new Date().getFullYear());

let t0 = Date.now();
let t1 = null;
let p0 = hrtime.bigint();
let p1 = null;
console.log('----------');
setTimeout(() => {
    t1 = Date.now();
    p1 = hrtime.bigint();
    console.log(t1 - t0);
    console.log(p1 - p0);
}, 1000);
