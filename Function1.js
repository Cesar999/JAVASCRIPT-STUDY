//Declaration
function calcRectArea(width, height) {
    return width * height;
}

//Expression
var getRectArea = function(width, height) {
    return width * height;
};


console.log(calcRectArea(2, 4), 'Declaration');
console.log(getRectArea(2, 4), 'Expression');