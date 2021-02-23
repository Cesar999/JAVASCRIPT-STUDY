function resolveNUmber() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(9);
      }, 2000);
    });
  }
  
// ASYNC (It works)
async function asyncCall(x) {
    console.log('calling Async');
    const result = await resolveNUmber(); // waits to get the resolve value
    console.log(result, 'Async');
    console.log(x + result, 'Async');
}
asyncCall(10);

// SYNC (Does not work)
// ----------------------------
function Call(x) {
    console.log('calling Sync');
    const result = resolveNUmber(); // returns a pending promise
    console.log(result, 'Sync');
    console.log(x + result, 'Sync');
}
Call(10);