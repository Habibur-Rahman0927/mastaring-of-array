// FindIndex method

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

const index1 = myArray.findIndex((item) => item === 3);
console.log(index1)
const index2 = team.findIndex((item) => item.name === 'Habib');
console.log(index2)

const indexFind = myArray.find((item) => item === 22);
console.log(indexFind)

const highestID = team.find((item) => item.id === 8);
console.log(highestID)



const OurFind = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

const highestIDOur = OurFind(team, (item) => item.id === 8);
console.log(highestIDOur)