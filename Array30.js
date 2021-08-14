// copy array elements

const arr = [1, 2, 3, 4];
const arr2 = arr;
arr2.push(5);
console.log(arr, arr2)

const arr3 = [...arr];//es6 shallow copy
arr3.push(6);
console.log(arr, arr3);

// shallow copy vs deeps copy
const points = [
    [10, 12],
    [2, 55],
    [67, 31]
];

// const pointsCopy = [...points];
// pointsCopy.push([1, 2]);

// pointsCopy[0][0] = 100;
// pointsCopy[0][1] = 120;

// console.log(points)
// console.log(pointsCopy)

// shallow copy
const arr4 = arr.map(() => true);
console.log(arr4 === arr)
const arr5 = arr.filter(() => true);
console.log(arr5 === arr)
const arr6 = arr.slice();
console.log(arr6 === arr)
const arr7 = arr.concat()
console.log(arr7 === arr)
const arr8 = Array.from(arr);
console.log(arr7 === arr)


// json.stringify and json.parse deep copy
console.log(points)
const pointsDeepCopy = JSON.parse(JSON.stringify(points))
pointsDeepCopy.push([1, 2]);

pointsDeepCopy[0][0] = 100;
pointsDeepCopy[0][1] = 120;

console.log(pointsDeepCopy)