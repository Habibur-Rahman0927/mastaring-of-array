// Find iterator from array

const arr = ['a', 'b', 'c'];
const iArr = arr[Symbol.iterator]();

console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());

// keys, value, enteries

const arry = ['a', 'b', 'c'];
const keys = arry.keys();// 0,1,2 iterator
const values = arry.values()// 'a','b','c'
const entries = arry.entries()//[0,'a'],[1, 'b'],[2,'c'];

console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(values.next())
console.log(values.next())
console.log(values.next())
console.log(values.next())
console.log(entries.next())
console.log(entries.next())
console.log(entries.next())
console.log(entries.next())

const loop = (it, name) =>{
    for(let v of it){
        console.log(`[${name}] - ${v}`);
    }
};

loop(keys,'KEY');
loop(values, 'Value');
loop(entries,'entry')