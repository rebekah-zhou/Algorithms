// Given a binary tree, determine if it is complete

// def complete: all levels except last level are completely filled 

// create node class
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// build tree 

root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right = new Node(3)

// create a queue 
// add left and right to the queue 
// queue = [[left, right], ...]

function checkCompleteBinaryTree(root) {
    if (root === null) return true 

    const queue = []
    queue.push([root.left, root.right])
  
    while(queue.length > 0) {
        const shiftedNodes = queue.shift()
        const leftNode = shiftedNodes[0]
        const rightNode = shiftedNodes[1]
        console.log(leftNode, rightNode)
        if (leftNode) {
            queue.push([leftNode.left, leftNode.right])
            if (rightNode) {
                queue.push([rightNode.left, rightNode.right])
            } else {
                return checkRestOfQueueForNull()
            }
        } else {
            if (rightNode) return false
            else {
                return checkRestOfQueueForNull()
            }
        }
    }

    return true

    function checkRestOfQueueForNull() {
        const found = queue.find(pair => pair[0] !== null || pair[1] !== null)
        return !found
    }
}

console.log(checkCompleteBinaryTree(root))

// while queue not empty
// shift the queue, check value in the stack for left and right values
// if left exists, push the left and right of that node to queue
// if left null, 
    // if right !== null return false
    // else check the rest of the queue (must be null values)
        // while queue not empty
        // if value !== null return false

// return true if while loop is done
