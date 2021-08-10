// Add New Elements

const arrP1 = [1, 2, 3];

const arrp2 = [8, 9];

arrP1[arrP1.length] = 4;
arrP1.push(5);
arrP1.push(6, 7);
console.log(arrP1);

// arrP1.push(arrp2);
// console.log(arrP1)

// arrP1.push(...arrp2);
// console.log(arrP1);

Array.prototype.push.apply(arrP1, arrp2);
console.log(arrP1)

// use unshift to insert element

const arrU1 = [5, 6, 7];
const arrU2 = [1, 2, 3]

arrU1.unshift(4);
console.log(arrU1);

// arrU1.unshift(...arrU2);
// console.log(arrU1);

Array.prototype.unshift.apply(arrU1, arrU2);

console.log(arrU1);

// use splice to insert at the given index
const arrS1 = [1, 2, 3, 5, 9];
const arrS2 = [6, 7, 8];
console.log(arrS1);

arrS1.splice(3, 0, 4);
console.log(arrS1);

arrS1.splice(5, 0, ...arrS2);
console.log(arrS1);