// understand compose

const add10 = n => n + 10;
const times3 = n => n * 3;
const div2 = n => n / 2;

let n = 5
const x = div2(times3(add10(n)))

console.log(x)

//compose function shortest way
const pipe = (...fns) => x => fns.reduce((acc, fns) => fns(acc), x);
// const r1 = pipe(add10,times3,div2)(n)
console.log(pipe(add10, times3, div2)(n));

// compose function long way

const compose = (...fns) => {
    return x => {
        return fns.reduce((acc, cur) => {
            return cur(acc)
        }, x)
    }
}
console.log(compose(add10, times3, div2)(n))