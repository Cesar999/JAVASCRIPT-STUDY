var literal = {
    myName: 'Cesar',
    age: 28,
    married: true,
    sayHi: function(lastname){
        return 'Hi, I am ' + this.myName + lastname
    }
}

var contructor = new Object();
constructor['age'] = 3; 
constructor.myName = 'Ricardo';
constructor.married = false;
constructor['sayHi'] = function(lastname){
    return 'Hi, I am ' + this.myName + lastname
}

console.log(literal, 'Literal');
console.log(constructor, 'Contructor');
