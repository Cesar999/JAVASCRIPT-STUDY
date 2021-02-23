
new Promise((resolve, reject)=>setTimeout(()=>resolve(1), 1000))
.then((e)=>{
    console.log(e);
    return new Promise((resolve, reject)=>setTimeout(()=>resolve(2), 1000));;
})
.then((e)=>{
    console.log(e);
    return new Promise((resolve, reject)=>setTimeout(()=>resolve(3), 1000));
})
.then((e)=>{
    console.log(e);
});