arr.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0 ;
});

console.log(arr);

const group = arr.reduce((acc, cur) =>{
    let groupName = cur.name.charAt(0).toUpperCase();
    if(acc[groupName]){
        acc[groupName].push(cur);
    }
    else{
        acc[groupName] = [cur];
    }
    return acc;
}, {})



const display = group =>{
    console.log('display contact information');
    console.log('-------')


    const keys = Object.keys(group);
    keys.forEach((keys) => {
        console.log(`group : ${keys}`);
        console.table(group[keys])
    })
}