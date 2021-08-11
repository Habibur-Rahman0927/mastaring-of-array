// map 

let names = [
    'Hello Habib',
    'khan aslam',
    'aslam khan',
    'hi this is me'
]
/* const s =[]
for (let i = 0; i < names.length; i++) {
    s.push(names[i].toUpperCase())
}
s
console.log(s) */


/* function loopReuse(arr, logic) {
    for (let i = 0; i < arr.length; i++) {
        // console.log('Reuse', arr[i]);
        logic(arr[i], i, arr);

    }
} */

/* const result1 = [];
loopReuse(names, value => result1.push(value.length))
console.log(result1)


const result2 = [];
loopReuse(names, value => result2.push(value.toUpperCase()))
console.log(result2)

const result3 = [];
loopReuse(names, value => result3.push(value.substr(6)))
console.log(result3) */


function reuseAndMap(arr, logic) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log('Reuse', arr[i]);
        result.push(logic(arr[i], i, arr));
    }
    return result;
}


const lngth = reuseAndMap(names, value => value.length);
const uppers = reuseAndMap(names, value => value.toUpperCase());
const sliced = reuseAndMap(names, value => value.substr(6));

console.log(lngth);
console.log(uppers);
console.log(sliced)

const leng = names.map(value => value.toUpperCase());
console.log(leng)


const studentArray = [
    { id: 1, name: 'Habib', gpa: 3.99, email: 'Habibur@gmail.com' },
    { id: 2, name: 'isalma', gpa: 2.99, email: 'isalma@gmail.com' },
    { id: 3, name: 'Roske', gpa: 1.99, email: 'Roskeur@gmail.com' },
    { id: 4, name: 'Euire', gpa: 4.99, email: 'Euireur@gmail.com' }
]

const mappedStudents = studentArray.map(value => {
    return{
        ...value,
        title:`Hello ${value.name} - Your result has been published`,
        msg: `Hello ${value.name}, Your result has been published and you have got ${value.gpa}. you have ${value.gpa >= 3? 'passed': 'failed'}`
    }
})

console.log(mappedStudents);