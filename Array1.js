// Array Literal

const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[99] = 100;//length = lastIndex + 1 ----- lastIndex = length -1;
console.log(arr.length);
console.log(arr);


const names = ['Habib', 'Rasel', 'khan', 'Manna'];
names[names.length] = 'last';
console.log(names.length);
console.log(names)