const Stack = require("./stack");

const s = new Stack();
s.push("orange");
s.push("bana");
s.list.display();

console.log(s.peek())