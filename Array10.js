// slice Array into Multiple Array 

const arr = [1, 2, 3, 4, 5, 6, 7];
const sliced = arr.slice(1, 3);// 1st parameter start and last parameter -1;
console.log(sliced)

// clone array 

const cloned = arr.slice();
console.log(cloned)// infact falba na arr
console.log(cloned === arr)

// Array like objects to array 
function toArray() {
    return Array.prototype.slice.call(arguments);
}
const argArray  = toArray(2,35,6,'habib');
console.log(argArray)
console.log(argArray.__proto__.constructor)