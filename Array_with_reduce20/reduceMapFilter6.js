// map and filter using reduce

const numbers = [1, 2, 3, 4, 5];

// mapped
const squares = numbers.reduce((acc, cur) => {
    acc.push(cur * cur);
    return acc;
}, [])

console.log(squares)


// filter
const odds = numbers.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur)
    }
    return acc;
}, [])

console.log(odds)


// big array 

const bigArray = [];

for (let i = 0; i < 5000000; i++) {
    bigArray.push(i);
}


// map and filter chain time efficiency
console.time('both')
bigArray.filter(v => v % 2 === 0).map(v => v * 2);
console.timeEnd('both');


// map and filter reduce time efficiency
console.time('reduce')
bigArray.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur * 2)
    }
    return acc;
}, []);

console.timeEnd('reduce')