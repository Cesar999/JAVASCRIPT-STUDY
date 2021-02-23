function makeIterator(start=0, end=5, step=1) {
    const iterator = {
        count: start,
        next: function(){
            if(this.count<=end){
                let result = {value: this.count, done: false};
                this.count += step;
                return result;
            } else {
                return {value: undefined, done: true};
            }
        }
    }
    return iterator;
}

const iterator = makeIterator();
let result = iterator.next();
while(!result.done){
    console.log(result);
    result = iterator.next();
}
console.log(result);
