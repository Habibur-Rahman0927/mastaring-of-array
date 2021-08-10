// Delete specific element

let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// remove first element
numbers.shift();

// remove last element
numbers.pop();

numbers.length = numbers.length - 1

// remove elements  - splice using index

numbers.splice(2, 1);

// remove elements - splice using value
const toBeDelete = 5;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === toBeDelete) {
        numbers.splice(i, 1);
    }
}

// filter Array

const toBeDelete2 = 7;
numbers = numbers.filter(item => item !== toBeDelete2);

// Delete Operator
// numbers[1] = undefined;
delete numbers[1];


// Reset whole Array

let x = [1, 2, 3];
let y = x;
x = [];
console.log(x, y);

// Alternative way

let xx = [1,2,3];
let yy = xx;
xx.length = 0;
console.log(xx, yy);

// reset array while loop
while(numbers.length)numbers.pop();

/* console */
console.log(numbers);