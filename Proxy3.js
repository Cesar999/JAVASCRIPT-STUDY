const handler = {
    has(target, key) {
      if (key[0] === '_') {
        return false;
      }
      return key in target;
    }
};

const me = {
    _secret: 'I like lady Gaga',
    age: 28
};
  
const proxy = new Proxy(me, handler);
console.log('age' in proxy); // true
console.log('_secret' in proxy); // false
console.log('_secret' in me); // true
