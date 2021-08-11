// Array some and every method

let productReview = [
    {ratings: '5'},
    {ratings: '4'},
    {ratings: '4'},
    {ratings: '1'}
];

const positive = productReview.every(value => value.ratings > 3);
console.log(positive)

if(positive){
    console.log('100% review')
}else{
    console.log('some customar is not satisfied')
}



let testRunsIn = [
    {runs : 333},
    {runs : 433},
    {runs : 33},
    {runs : 233},
]

const atLeastOne = testRunsIn.some(value => value.runs >= 400)
console.log(atLeastOne);