
const character = {
    isPremium: false,
    printCharacter: function(){
        console.log(this.name + ' is level ' + this.level);
    }
}

// Create
const mage = Object.create(character);
mage.level = 92;
mage.name = 'Arcayus';

mage.printCharacter();

// defineProperty
Object.defineProperty(mage, 'skill', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'FireBall'
}); 
Object.defineProperty(mage, 'attack', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: function(){
        console.log(this.name + ' is casting ' + this.skill);
    }
}); 
mage.attack();

