const Node = require("./Node")

class LinkedList{
    head = null;
    add (newData){
        let newNode = new Node(newData);

        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next!==null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    insertAt(newData, index){
        let newNode = new Node(newData);
        if(index!==0){
            //
            let current = this.head;
            for(let i=0; i<index-1; i++){
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

    }

    deleteAt(index){
        let current = this.head;
        if(index!==0){
            for(let i=0; i<index-1; i++){
                current = current.next;
            }
            current.next = current.next.next;
        }else{
            this.head = this.head.next;
        }
    }

    length(){
        let count = 0;
        let current = this.head;
        while(current!==null){
            count++;
            current = current.next;
        }
        console.log(count);
    }

    display(){
        let current = this.head;
        while(current!==null){
            console.log(current.data);
            current=current.next;
        }
    }

    getAt(index){
        let current = this.head;
        for(let i=0; i<index; i++){
            current = current.next;
        }
        return current.data;
    }
}

module.exports = LinkedList;