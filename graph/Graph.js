

class Graph {
    constructor(){
        this.nodes = {};
    }

    addNode(node){
        this.nodes[node.id] = node;
    }

    // add edge to node 1 to 2, bi-directional
    addEdge(startNodeID, endNodeID){
        let startNode = this.nodes[startNodeID];
        let endNode = this.nodes[endNodeID];
        startNode.addNeighbour(endNode);
        endNode.addNeighbour(startNode);
    }
}

module.exports = Graph;