// static methods vs instance methods

const arr = [];
// arr.concat() // instance methods
// Array.from // static Methods



// Example of javascript static method
// Array.from()
const s = Array.from('Habibur Rahman');
console.log(s);

const st = new Set(['foo', 'bar', 'foo']);
const s1 = Array.from(st);
console.log(s1)



const mapper = new Map([
    ['1', 'a'],
    ['2', 'b'],
]);

const s2 = Array.from(mapper.values());
console.log(s2)
const s3 = Array.from(mapper.keys());
console.log(s3)


function f() {
    return Array.from(arguments);
}

const fun = f(1, 2, 3);
console.log(fun);

// using an arrow function  as the map function to
// Manipulate the elements
console.log(Array.from([1, 2, 3], (x) => x + x));

// Generate a squence of numbers
// since the array is initialized with `undefined` on each position
// the value of v below will be `undefined`
console.log(Array.from({ length: 5 }, (v, i) => i));


// sequence generator function (commonly refferred to as "range", e.g clojure, php etc)

const range = (start, stop, step) => {
    Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
    )
}

console.log(range(0, 4, 1));
// const alpa = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x))
// console.log(alpa);


// Array.isArray()
// all following return true
Array.isArray([])
Array.isArray([1])
Array.isArray(new Array())
Array.isArray(new Array(['z', 'e', 'a', 's']));
Array.isArray(new Array(3));


// little know fact Array.prototype itself
Array.isArray(Array.prototype);

// all following calls return false

Array.isArray()
Array.isArray({})
Array.isArray(null)
Array.isArray(undefined)
Array.isArray(17)
Array.isArray('Array')
Array.isArray(true)
Array.isArray(false)
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });


// Array.of()

Array.of(7)// [7]
Array.of(1, 2, 3, 4) // [1,2,3,4]

Array.of(undefined) //undefined

Array(7)// [7 empty index];
Array(1, 2, 3);
