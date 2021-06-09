class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        Person.nationality = 'Mexican';
    }
    getBio(){
        console.log(`My name is ${this.name} and my Age is ${this.age} and I am ${Person.nationality}`);
    }
}

class Employe extends Person {
    constructor(name, age, job){
        super(name, age);
        this.job = job;
        Employe.company = 'Apple';
    }
    getBio(){
        console.log(`My name is ${this.name} and my Age is ${this.age} and I work on ${Employe.company} as a ${this.job} and I am ${Person.nationality}`);
    }
}

const person = new Person('Cesar', 26);
person.getBio();
const employe = new Employe('Ricardo', 1, 'Programer');
employe.getBio();