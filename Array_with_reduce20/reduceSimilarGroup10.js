// grouping similar group

const words = ['one', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']

const group = words.reduce((acc, cur) => {
    const len = cur.length;
    if (acc[len]) {
        acc[len].push(cur)
    }
    else {
        acc[len] = [cur]
    }
    return acc;
}, {})

console.log(group);


// combining Data from
const courses = [
    { id: 'OC1', name: 'javascript all your need to know', topic: 'nodejs', price: 2599 },
    { id: 'OC2', name: 'Python all your need to know', topic: 'python', price: 2599 },
    { id: 'OC3', name: 'java all your need to know', topic: 'java', price: 2599 },
    { id: 'OC4', name: 'c++ all your need to know', topic: 'c++', price: 2599 },
    { id: 'OC5', name: 'React all your need to know', topic: 'react', price: 2599 },
];

const discountPrice = {
    OC1 : 233,
    OC2 : 123,
    OC3 : 433,
    OC4 : 533,
    OC5 : 633,
}
console.log(courses)

const updateCourse = courses.reduce((acc, cur) =>{
    if(discountPrice[cur.id]){
        cur.discountPrice = discountPrice[cur.id]
    }else{
        cur.discountPrice = 0;
    }
    acc.push(cur);
    return acc;
},[]);

console.log(updateCourse);
