class Node {
    constructor(id, data){
        this.data = data;
        this.id = id;
        this.neighbours = [];
    }

    addNeighbour(newNode){
        this.neighbours.push(newNode);
    }

    getNeighbours(){
        return this.neighbours;
    }
}

module.exports = Node;