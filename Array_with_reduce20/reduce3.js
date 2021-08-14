/* our own reduce */

function myReduce(arr, cb, init) {
    let acc = init,
     start = 0;
    if (!init) {
        acc = arr[0];
        start = 1;
    }
    for (let i = start; i < arr.length; i++) {
        acc = cb(acc, acc[i], i, arr);
    }
    return acc;
}

const arr = [1, 2, 3, 4, 5];

const sum = myReduce(arr, (acc, cur) => {
    return acc + cur;
});
console.log(sum)



const votes = [
    'java',
    'java',
    'python',
    'java',
    'javascript',
    'python',
    'javascript'
]

const result = myReduce(votes,(acc, cur)=>{
    if(acc[cur]){
        acc[cur]++;
    }else{
        acc[cur] = 1;
    }
    return acc;
},{});

console.log(result)