function Character(name){
    this.name = name;
}
function Mage(name, element){
    Character.call(this, name);
    this.element = element;
}

Mage.prototype = Object.create(Character.prototype);
Mage.prototype.constructor = Mage;

const mage1 = new Mage('Arcayus', 'Fire');
console.log(mage1 instanceof Character, 'Character');
console.log(mage1 instanceof Mage, 'Mage');
console.log(mage1.__proto__, Mage.prototype);
console.log(mage1.__proto__.__proto__, Character.prototype);
console.log(Object.getPrototypeOf(mage1), Mage.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(mage1)), Character.prototype);
//---------------------------------------------------
