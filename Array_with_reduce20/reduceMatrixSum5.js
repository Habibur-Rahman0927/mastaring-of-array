

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const resultH = matrix.map(row => {
    console.log(row)
    return row.reduce((a, b) => a + b);
});

console.log(resultH);

const resultV = matrix.reduce((acc, cur) => {
    return acc.map((v, i) => cur[i] + v)
})
console.log(resultV)

const flatsum = matrix.reduce((acc, cur) =>{
    return acc+ cur.reduce((a,b) => a+b)
},0)

console.log(flatsum);