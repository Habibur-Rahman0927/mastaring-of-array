// implement bubble sorting

let myArray = [1, 3, 70, 39, 22, 43, 5, 6, 2, 78, 4];

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }

        }

    }
}

console.log('[Unsort]',myArray)
bubbleSort(myArray)
console.log('[Sorted]',myArray);