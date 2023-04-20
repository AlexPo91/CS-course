// import { createBitGetter } from './Homework_1/';
// const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

// console.log(bitGetter.get(0, 1)); // 1
// console.log(bitGetter.get(1, 1)); // 0

// console.log(bitGetter.set(0, 1, 1)); //
// console.log(bitGetter.get(0, 1)); // 0

// import { Queue } from "./Homework_4/Queue";

// const queue = new Queue()

// queue.push(10);
// queue.push(11);
// queue.push(12);

// console.log(queue.head);  // 10

// console.log(queue.shift()); // 10

// console.log(queue.head);  // 11

// console.log(queue.shift()); // 11
// console.log(queue.shift()); // 12
// console.log(queue.shift()); // Exception

import { Dequeue } from './Homework_4/Dequeue';

const dequeue = new Dequeue();

dequeue.push(10);
dequeue.unshift(11);
dequeue.push(12);

console.log(dequeue.pop()); // 12
console.log(dequeue.shift()); // 11
console.log(dequeue.pop()); // 10
console.log(dequeue.pop()); // Exception
