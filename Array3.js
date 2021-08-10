// Traverse Array Elements

const arr = [1, 2, 3, 4, 5];
const n = arr[3];
const m = arr[2];
const x = 2, y = 1;

console.log(n, m, arr[x], arr[y], arr[x + y], arr[x - y], arr[x + y + 1])

// simple traverse

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}
console.log('br')
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

}
console.log(sum);
console.log(sum / arr.length)

const arr2 = [33, 4, 5, 33, 55, 77, 66, 33, 1, 12];

let largestNunber = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (largestNunber < arr2[i]) {
        largestNunber = arr2[i];
    }
}
console.log(largestNunber)

let smallestNumber = arr2[0];

for (let i = 0; i < arr2.length; i++) {
    if(smallestNumber > arr2[i]){
        smallestNumber = arr2[i];
    }
}
console.log(smallestNumber);
