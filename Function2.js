function Calc (x, y, z){
    console.log(arguments);
    console.log(arguments[0], arguments[1], arguments[2]);
    return x + y + z;
}

Calc(1, 2, 3);

//---------------------------------

function Person(name, age){
    this.name = name;
    this.age = age;
}

const p1 = new Person('Cesar', 28);
console.log(p1);

// ----------------------------------
