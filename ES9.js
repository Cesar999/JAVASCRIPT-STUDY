new Promise((resolve, reject)=>resolve('Value 1'))
.then(val=>console.log(val))
.catch(error => console.error(error)) 
.finally(() => console.log('finished 1'));

new Promise((resolve, reject)=>reject('Error 2'))
.then(val=>console.log(val))
.catch(error => console.error(error)) 
.finally(() => console.log('finished 2'));
