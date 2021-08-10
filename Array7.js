// update existing elements

const numbers = [1,2,7,4,5];
numbers[2] = 3;
console.log(numbers);

const students = [
    {id:1, name: 'Habib'},
    {id:2, name: 'Rasel'},
    {id:3, name: 'Khan'},
    {id:4, name: 'islam'}
];

const givenId = 3;
const updateName = 'aslam khan';

for (let i = 0; i < students.length; i++) {
    if(givenId === students[i].id){
        students[i].name = updateName;
        break;
    }
}

console.log(students);