class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node
        } else {
            throw new Error("This is not a node. or null. :(")
        }
    }

    getNextNode() {
        return this.next
    }
}

const jonNode = new Node("Cool")
const rebekahNode = new Node("Cooler")
jonNode.setNextNode(rebekahNode)

console.log(jonNode)