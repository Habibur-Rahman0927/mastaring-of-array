// How to work sort method

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// numbers.sort();
// console.log(numbers);

let numbers = [10, 3, 70, 39, 22, 43, 5, 6, 2, 78, 4];
// call back accinding order
numbers.sort((a, b) => {
    // console.log(a, b)
    return a - b
})
// console.log(numbers)


let strings = ['apple', 'cat', 'Ball', 'Apple'];
strings.sort((a, b) => {
    // a = a.toLowerCase();
    // b = b.toLowerCase();
    if (a > b) return 1;
    if (b > a) return -1;
    return 0
});

console.log(strings)

let strings2 = ['Apple', 'Ant', 'Ball', 'Cat'];

strings2.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0
});
console.log(strings2);


const team = [
    {id:2,name: 'Habib'},
    {id:3,name: 'Rabib'},
    {id:9,name: 'Mabib'},
    {id:5,name: 'Kabib'},
    {id:1,name: 'Oabib'},
    {id:4,name: 'Aabib'},
    {id:8,name: 'Zabib'},
];

// sort by id

team.sort((a, b) =>{
    if(a.id > b.id) return 1;
    if(a.id < b.id) return -1;
    return 0;
})
console.log(team);
team.sort((a, b) =>{
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
})
console.log(team);


