const person = { name: 'Fred', age: 87 }; 

const personEntries = Object.entries(person);
console.log(personEntries); // [['name', 'Fred'], ['age', 87]] 

const personValues = Object.values(person) ;
console.log(personValues); // ['Fred', 87] 