function sayName(lastname){
    console.log('Hi I am ' + this.name + ' ' + lastname);
}

const obj1 = {
    name: 'Cesar',
    lastname: 'Encinas',
    sayHi: function(){
        sayName.call(this, this.lastname); // Using call
    }
}

const obj2 = {
    name: 'Ricardo',
    lastname: 'Encinas',
    sayHi: function(){
        sayName.apply(this, [this.lastname]); // Using apply
    }
}

const obj3 = {
    name: 'Leslie',
    lastname: 'Gaxiola',
    sayHi: function(){
        sayName.bind(this, this.lastname)(); // Using bind
    }
}

const obj4 = {
    name: 'Rafael',
    lastname: 'Encinas',
    sayHi: function(){
        sayName(this.lastname); // Without Call or Apply 
    }
}

obj1.sayHi();
obj2.sayHi();
obj3.sayHi();
obj4.sayHi();
