function Character(name){
    this.name = name;
}

Mage.prototype = Object.create(Character.prototype);
Mage.prototype.constructor = Mage;

function Mage(name, element){
    Character.call(this, name);
    this.element = element;
}

const mage1 = new Mage('Arcayus', 'Fire');
console.log(mage1 instanceof Character, 'Character');
console.log(mage1 instanceof Mage, 'Mage');
console.log(mage1.__proto__, Mage.prototype);
console.log(mage1.__proto__.__proto__, Character.prototype);
//---------------------------------------------------
