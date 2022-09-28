'use strict';

// const Stack = require('./Stack/Stack.js');


// const stack = new Stack();

// stack.push("ibraheem");
// stack.push("mohammed");
// stack.push("ahmed");
// stack.push("ali");


// console.log(stack.peek());

// console.log(stack.pop());

const Queue = require('./Queue/Queue.js');

const queue = new Queue();

queue.enqueue("ibraheem");
queue.enqueue("mohammed");
queue.enqueue("ahmed");

console.log(queue.peek());


