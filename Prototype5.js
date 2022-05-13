function Circle1(radius){
    this.radius = radius;
    const myPrivateFunction = () => {
        console.log("My property: " + this.radius);
    }
    this.area = function(){
        console.log(Math.pow(this.radius, 2)*Math.PI, this);
        myPrivateFunction();
    }
}

const c1 = new Circle1(2);
c1.area();

//-------------------------


const myPrivateFunction = function() {
    console.log("My property: " + this.radius);
}

class Circle2 {
    constructor(radius){
        this.radius = radius;
    }

    area = function(){
        console.log(Math.pow(this.radius, 2)*Math.PI, this);
        myPrivateFunction.call(this);
    }
}
const c2 = new Circle2(2);
c2.area();

