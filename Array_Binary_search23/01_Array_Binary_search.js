// implement Binary search

let array = [1, 3, 70, 39, 22, 43, 5, 6, 2, 78, 4];

const binarySearch = (arr, key) => {
    let lowest = 0;
    let highest = arr.length - 1;
    while (lowest <= highest) {
        let mid = Math.floor((lowest + highest) / 2);
        if (arr[mid] === key) return mid;

        if (arr[mid] < key) lowest = mid + 1;
        if (arr[mid] > key) highest = mid - 1;
    }
    return -1;
}

array.sort((a, b) => a - b);
console.log(array)
const index = binarySearch(array, 43);
console.log(index);





