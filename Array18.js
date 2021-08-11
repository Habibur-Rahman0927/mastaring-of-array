// filter
const studentArray = [
    { id: 1, name: 'Habib', gpa: 3.99, email: 'Habibur@gmail.com', due: true, dueAmount: 1200 },
    { id: 2, name: 'isalma', gpa: 2.99, email: 'isalma@gmail.com', due: false, dueAmount: 0 },
    { id: 3, name: 'Roske', gpa: 1.99, email: 'Roskeur@gmail.com', due: true, dueAmount: 1200 },
    { id: 4, name: 'Euire', gpa: 4.99, email: 'Euireur@gmail.com', due: false, dueAmount: 0 }
];

const lowGpa = studentArray.filter(value => value.gpa < 3);
console.log(lowGpa)

const dueStudents = studentArray.filter(value => value.due);
console.log(dueStudents)

const dueStudents1 = studentArray.filter(value => value.due > 0);
console.log(dueStudents1)

// map vs  filter

const mappingArray = lowGpa.map(value =>{
    return{
        ...value,
        msg: `your are filed, your gpa is ${value.gpa}`
    }
})

console.log(mappingArray)
