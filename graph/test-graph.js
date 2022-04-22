const Node = require("./Node");
const Graph = require("./Graph");

let g = new Graph();

g.addNode(new Node(1,"A"));
g.addNode(new Node(2,"B"));

g.addEdge(1,2);

console.log(g.nodes["1"]);