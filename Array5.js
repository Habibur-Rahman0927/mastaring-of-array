// Array of Anythings

const arr = [10, 'Ten', true, getTen, { ten: 10 }, [10, 10]];

console.log(arr);

function getTen() {
    return 10;
}

const favChannels = [
    { name: 'Habib', Age: 22 },
    { name: 'khan', Age: 24 },
    { name: 'Askas', Age: 23 }
];
console.log(favChannels);


// functional Array
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, div, mod];

const a = 10, b = 20;
for (let i = 0; i < funcs.length; i++) {
    const result = funcs[i](a, b)
    console.log(`[${funcs[i].name}] Result = ${result}`)
}

// Array of Array - Multi Dimesional  Array

const pointTable = [
    [0, 0],
    [3, 5],
    [5, 7],
    [10, 23]
];

// One dimesional array  traverse

for (let i = 0; i < pointTable.length; i++) {
    console.log(`pointTable ${i} -- x = ${pointTable[i][0]} and y = ${pointTable[i][1]}`);

}
for (let i = 0; i < pointTable.length; i++) {
    // console.log(numbers[i]);  
    for (let j = 0; j < pointTable[i].length; j++) {
        console.log(`pointTable [ ${i}, ${j}] = pointTable -- ${pointTable[i][0]} `);
    }
}



const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);  
    for (let j = 0; j < numbers[i].length; j++) {
        // console.log(numbers[i][j]);  
        console.log(`numbers [ ${i}, ${j}] = numbers -- ${numbers[i][0]} `);
    }
}

// Matrix Example

const matrixA = [
    [1, 3],
    [1, 0],
    [1, 2]
];

const matrixB = [
    [0, 0],
    [7, 5],
    [2, 1]
];

const matrixSum = (matrixA, matrixB) =>{
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);