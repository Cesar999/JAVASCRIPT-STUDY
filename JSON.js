var object1 = {
    name: 'Cesar',
    age: 28,
    skill: function(){
        return 'programing';
    }
}

function replacer(key, val) {
    if(key === 'name'){
        return val + ' Encinas';
    } else {
        return val;
    }
};

function reviver(key, val) {
    if(key === 'name'){
        return val + ' Encinas';
    } else {
        return val;
    }
};

console.log(JSON.stringify(object1), ' - stringify');
console.log(JSON.stringify(object1, replacer), ' - stringify and replacer');

console.log(JSON.parse('{"name":"Cesar","age":28}'), ' - parse');
console.log(JSON.parse('{"name":"Cesar","age":28}', reviver), ' - parse, reviver');
