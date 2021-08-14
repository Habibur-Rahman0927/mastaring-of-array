// compare two array

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log('Equal');
} else {
    console.log('not qual')
}

const compare = (arr1, arr2) => {
    if (arr1.langth !== arr2.langth) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;

    }
    return true

}

console.log(compare(arr1, arr2))

const arr = [1,2,3,4];
console.log(arr.constructor.prototype)
console.log(Array.prototype)

console.log(Object.getOwnPropertyNames(Array.prototype))