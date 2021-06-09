const myObj = {
    name: 'Arcayus',
    class: 'Warrior',
    level: 60
};

myObj.itemLevel = 200;
Object.defineProperty(myObj, 'spec', {
    enumerable: true,
    configurable: true,
    writable: false,
    value: 'Fury'
}); 
Object.seal(myObj);
// myObj.covenant = 'Venthyr';  // Cannot add property covenant, object is not extensible
// myObj.spec = 'Arms'; // Cannot assign to read only property
myObj.itemLevel = 184;
console.log(myObj, myObj.hasOwnProperty('spec'), myObj.hasOwnProperty('covenant'));

// -----------------------------------

const myChar = {
    name: 'Galeslie',
    class: 'Priest',
    level: 60
};

myChar.itemLevel = 200;
Object.defineProperty(myChar, 'spec', {
    enumerable: true,
    configurable: true,
    writable: false,
    value: 'Shadow'
}); 
Object.freeze(myChar);
// myChar.covenant = 'Necrolord'; // Cannot add property covenant, object is not extensible
// myChar.spec = 'Holy'; 
// myChar.itemLevel = 211; // Cannot assign to read only property
console.log(myChar, myChar.hasOwnProperty('spec'), myChar.hasOwnProperty('covenant'));
