
function Character(name){
    this.name = name;
    this.printName = function(){
        console.log(this.name);
    }
}

function Mage(name, type){
    Character.call(this, name);
    this.type = type;
    this.printType = function(){
        console.log(this.type);
    }
}

//Mage.prototype = Object.create(Character.prototype);

const char1 = new Character('Rasek');
char1.printName();

const mage1 = new Mage('Arcayus', 'Fire');
mage1.printName();
mage1.printType();

console.log(mage1 instanceof Character, 'Character');
console.log(mage1 instanceof Mage, 'Mage');
