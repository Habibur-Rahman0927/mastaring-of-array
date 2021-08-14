// iterable  object

function makeRangeIterator(start = 0, end = Infinity, step = 1){
    let nextIndex = start;
    let iterationCount = 0;
    const rangeIteration = {
        next: function(){
            let result;
            if(nextIndex < end){
                result = {value: nextIndex, done: false};
                nextIndex+=step;
                iterationCount++;
                return result;
            }
            return { value : iterationCount, done: true}
        }
    };
    return rangeIteration;
}

const it =  makeRangeIterator(1,10,2);

let result = it.next();
while (!result.done) {
    console.log(result.value);
    result = it.next()
}
console.log('iteration over', result.value)