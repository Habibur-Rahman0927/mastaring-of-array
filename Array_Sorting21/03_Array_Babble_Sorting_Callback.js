// implement bubble sorting

let myArray = [1, 3, 70, 39, 22, 43, 5, 6, 2, 78, 4];
const team = [
    {id:2,name: 'Habib'},
    {id:3,name: 'Rabib'},
    {id:9,name: 'Mabib'},
    {id:5,name: 'Kabib'},
    {id:1,name: 'Oabib'},
    {id:4,name: 'Aabib'},
    {id:8,name: 'Zabib'},
];



const bubbleSort = (arr,cb) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (cb(arr[j] , arr[j + 1]) > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }

        }

    }
}

bubbleSort(myArray, (a,b) => a-b);
console.log(myArray)

bubbleSort(team,(a,b) => a.id - b.id);
console.log(team);
bubbleSort(team,(a,b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
});
console.log(team);


