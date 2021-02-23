const character = new Map();
character.set('level', 90);
character.set(2, 'Ventyr');
character.set('class', 'warrior');

console.log(character.get('class'));
console.log(character.has('level'));
console.log(character.delete('level'));
console.log(character.has('level'));
console.log(character);
character.clear();
console.log(character);