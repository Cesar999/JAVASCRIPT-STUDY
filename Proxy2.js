const user = {
    firstName: 'Cesar',
    lastName: 'Encinas',
    age: 25
}

const handler = {
    set(target, property, value) {
        if (property === 'age') {
            if (typeof value !== 'number') {
                console.log('Age must be a number.');
            }
            else if (value < 21) {
                console.log('The user must be 21 or older.')
            }
            else {
                target[property] = value;
                console.log(`${property}: ${value}`);
            }
        } 
        return true;
    }
};

const proxyUser = new Proxy(user, handler);
proxyUser.age = 'foo'; 
proxyUser.age = 17;   
proxyUser.age = 28;