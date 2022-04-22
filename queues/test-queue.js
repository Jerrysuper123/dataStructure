const Queue = require("./queue");

const q = new Queue();

q.enqueue("Apples");
q.enqueue("Oranges");
q.dequeue();
console.log(q);
console.log(q.peek());