class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const newNode = new Node(10)
newNode.left = new Node(5)
newNode.right = new Node(15)
newNode.left.left = new Node(2)
newNode.left.right = new Node(6)
newNode.left.left.left = new Node(1)
newNode.left.left.right = new Node(3)
newNode.left.right.right = new Node(7)
newNode.right.left = new Node(12)
newNode.right.right = new Node(17)

inOrderTraversal(newNode)

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left)
        console.log(node.val)
        inOrderTraversal(node.right)
    }
}