
const LinkedList = require("./LinkedList");

let list = new LinkedList();

list.add("apples");
list.add("oranges");
list.insertAt("bana",0);
list.deleteAt(0);
list.length();
list.display();