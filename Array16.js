// for loop vs forEach

let names = [
    'Hello Habib',
    'khan aslam',
    'aslam khan',
    'hi this is me'
]

for (let i = 0; i < names.length; i++) {
    console.log(names);
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);

}

// iterating logic => business logic 

function loopReuse(arr, logic) {
    for (let i = 0; i < arr.length; i++) {
        // console.log('Reuse', arr[i]);
        logic(arr[i], i, arr);

    }
}

function log(value) {
    console.log(value);
}

function logic(value, index, arr) {
    console.log(value, index, arr);
}

loopReuse(['One', 'Two', 'Three'], logic)
loopReuse([1, 2], log)

function hello(value,) {
    console.log(value);
}
loopReuse(names, hello)



function myForEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

const nums = [1, 2, 3, 4];
let sum = 0;

// function sumFunc(v) {
//     sum += v;
// }

myForEach(nums, (v)=> sum+=v);
console.log(sum);



myForEach(names, (value, index) => console.log(`${index+1}: ${value}`))