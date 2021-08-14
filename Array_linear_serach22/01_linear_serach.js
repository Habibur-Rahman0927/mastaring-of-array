// linear search 

let myArray = [1, 3, 70, 39, 22, 43, 5, 6, 2, 78, 4];
const team = [
    { id: 2, name: 'Habib' },
    { id: 3, name: 'Rabib' },
    { id: 9, name: 'Mabib' },
    { id: 5, name: 'Kabib' },
    { id: 1, name: 'Oabib' },
    { id: 4, name: 'Aabib' },
    { id: 8, name: 'Zabib' },
];
const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

console.log(OurFind(myArray, 4));

const linearSearchCB = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearchCB(team, (item) => item.name ==='Habib'));
console.log(linearSearchCB(team, (item) => item.id === 1));

