const LinkedList =require("../linked-list/LinkedList");

class Queue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(newData){
        this.list.add(newData);
    }

    dequeue(){
        this.list.deleteAt(0)
    }

    peek(){
        return this.list.getAt(0);
    }
}

module.exports = Queue;