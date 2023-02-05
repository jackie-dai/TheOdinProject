class DirectedGraph {

    constructor(numOfVertices) {
        this.lst = [[], [], []];
        this.numOfEdges = 0;
        this.numOfVertices = numOfVertices;
    }

    connect(start, end) {
        this.lst[start].push(end);
        this.numOfEdges += 1;
    }

    adj(start) {
        return this.lst[start];
    }

    connected(start, end) {
        console.log("entered: " + start);
        console.log(this.lst[start]);
        return this.lst[start].includes(end);
    }

    numOfVertices() {
        return this.numOfVertices;
    }

    numOfEdges() {
        return this.numOfEdges;
    }
}