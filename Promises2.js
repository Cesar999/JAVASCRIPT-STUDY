
const myPromise1 = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('this first');
            resolve();
            },2000); 
    });
} 
const myPromise2 = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('and then this');
            resolve();
        },2000);
    });
} 

myPromise1().then(()=>myPromise2());
