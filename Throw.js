function calc(width, height){
    if (isNaN(width) || isNaN(height)) {
        throw 'Parameter is not a number!';
    } else {
        console.log(width * height);
        return;
    }
}

calc(2, 3);

calc('x', 3);