const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'promise1');
  });
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'promise2');
  });
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'promise3');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//----------------------------------------------------------

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'promise4');
  });
const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'promise5');
  });
const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'promise6');
});

Promise.race([promise4, promise5, promise6]).then((values) => {
  console.log(values);
});