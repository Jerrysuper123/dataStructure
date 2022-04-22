const LinkedList = require("../linked-list/LinkedList");

class Stack{
    constructor(){
        this.list = new LinkedList();
    }
    push(newData){
        this.list.insertAt(newData,0)
    }

    pop(){
        this.list.deleteAt(0);
    }

    peek(){
        return this.list.getAt(0);
    }
}

module.exports = Stack;
