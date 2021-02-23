const myObj = {
    name: 'Arcayus',
    class: 'Warrior',
    level: 60
};

myObj.itemLevel = 200;
Object.defineProperty(myObj, 'spec', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Fury'
}); 
Object.seal(myObj);
myObj.covenant = 'Venthyr';
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
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'Shadow'
}); 
Object.freeze(myChar);
myChar.covenant = 'Necrolord';
myChar.itemLevel = 211;
console.log(myChar, myChar.hasOwnProperty('spec'), myChar.hasOwnProperty('covenant'));
