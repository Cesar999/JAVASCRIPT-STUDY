const obj = {name: 'Cesar', sayHi: function(){
    console.log(this, ' - Object context'); // obj
    console.log('Hi I am '+this.name, ' - Object Method');
    function x(){
        console.log(this, ' - Nested Function'); // GLobal
    }
    x();
}};

obj.sayHi(); 

console.log(this, ' - Global context');
