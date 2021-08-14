/* frequency checker */

const votes = [
    'java',
    'java',
    'python',
    'java',
    'javascript',
    'python',
    'javascript'
]

const result = votes.reduce((acc, cur)=>{
    if(acc[cur]){
        acc[cur]++;
    }else{
        acc[cur] = 1;
    }
    return acc;
},{});

console.log(result)