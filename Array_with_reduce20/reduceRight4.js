// Reduce right

const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]

const result = arr.reduceRight((acc, cur) => {
    return acc.concat(cur);
})

console.log(result);


const nums = [1, 2, 3, 4];
const sum = nums.reduceRight((acc, cur) => {
    console.log(`acc [${acc}] - [${cur}]`);
    return acc + cur;
})

console.log(`sum = ${sum}`);


let products = [
    { name: 'java', price: 250 },
    { name: 'Python', price: 350 },
    { name: 'java', price: 750 },
    { name: 'javascript', price: 750 },
    { name: 'C++', price: 550 },
    { name: 'java', price: 150 },
    { name: 'javascript', price: 250 },
]

const invoice = products.reduce((acc, cur) =>{

    if(acc[cur.name]){
        acc[cur.name].quantity++;
        acc[cur.name].price +=cur.price;
        
    }
    else{
        acc[cur.name] = {
            price: cur.price,
            quantity : 1
        }
    }
    return acc;
},{});

console.log(invoice)