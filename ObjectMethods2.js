const myObj = {
    name: 'Arcayus',
    class: 'Warrior',
    spec: 'Fury',
    level: 60
};

// defineProperty
Object.defineProperty(myObj, 'covenant', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Ventyr'
}); 

// defineProperty
Object.defineProperty(myObj, 'guild', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Masters Of Death'
}); 

console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj));


