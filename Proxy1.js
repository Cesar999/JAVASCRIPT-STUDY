const handler = {
    get: function(target, key) {
      return key in target? target[key] : 'Cesar';
    }
}

// handler that returns a string when trying to acces a non existing property
const obj = {x: 'Leslie'};
const prox = new Proxy(obj, handler)
console.log(prox.x, prox.y);
