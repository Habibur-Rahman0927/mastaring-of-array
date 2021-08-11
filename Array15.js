// push and shift Methods

const Queue = require('./Array14');

const queue = new Queue();

queue.enqueue('Task One');
queue.enqueue('Task Two');
queue.enqueue('Task Three');
queue.enqueue('Task Four');

queue.showQueue();
console.log('---')
queue.dequeue();
queue.dequeue();
queue.showQueue();
console.log('---');

console.log(queue.next());
console.log(queue);


/* build in method javascript */

const q = [];
q.push('Item One');
q.push('Item Two');
q.push('Item Three');

console.log(q);

q.shift();
q.shift();
console.log(q)