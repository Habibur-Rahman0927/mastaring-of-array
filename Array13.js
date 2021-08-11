// stack implement

const Stack = require('./Array12');

const stack = new Stack();

const text = 'Hello';

for (let i = 0; i < text.length; i++) {
    stack.push(text[i])
}
let revesedText = '';

while (!stack.isEmpty()) {
    // console.log('pop')
    // console.log(stack)
    revesedText += stack.pop();
}

// console.log(revesedText);

// javascript array revers method

const text1 = "hello";
const jsStack = [];

for (let i = 0; i < text1.length; i++) {
    jsStack.push(text1[i]);
}
console.log(jsStack);

let result1 = '';

while (jsStack.length) {
    result1 +=jsStack.pop();
}
console.log(result1)