function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.calcArea = function(){
        return this.height * this.width;
    };
    this.printColor = function(){
        console.log(this.color);
    }
}

const rect = new Rectangle(4, 8);

Rectangle.prototype.calcPerim = function(){
    return this.height * 2 + this.width * 2;
}

Rectangle.prototype.color = 'Red';

console.log(rect.calcArea());
console.log(rect.calcPerim());
rect.printColor();