/* understand the concept of Reduce */
/* hands on reduce */

let numbers = [1, 2, 3, 4, 5];
function reduce(accumulator, currentValue) {
    return accumulator + currentValue
}
const sum = numbers.reduce(reduce)
console.log(sum);

const avg = numbers.reduce((acc, cur, index, arr) => {
    acc += cur;
    if (index === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
})
console.log(avg);

/* Array flatten example */

let nestedArray = [[1, 2], 3, [4, 5]];
// use flat method
const flatArray1 = nestedArray.flat();
console.log(flatArray1)

// use reduce
const flatArray2 = nestedArray.reduce((acc, cur) => {
    return acc.concat(cur);
}, [])
console.log(flatArray2);


/* array flatMap */
const arr = [1, 2, 3, 4, 5];

const map = arr.map(x => [x * 2])//.flat()
console.log(map);

const flatMap = arr.flatMap(x => [x * 2]);
console.log(flatMap);

const flatMap1 = arr.flatMap(x => [x, x * 2]);
console.log(flatMap1);

/* flatmap // reduce */

const reduceFlatMap = arr.reduce((acc, cur) =>{
    return acc.concat([cur, cur*2]);
},[])

console.log(reduceFlatMap)