/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    let queue = []
    let level = 0
    let leftLevel = 0
    let rightLevel = 0
    
    return depthFirstSearch(root)
    
    function depthFirstSearch(node) {
        if (Math.abs(leftLevel - level) > 1 || Math.abs(rightLevel - level) > 1) return false
        if (node.left) queue.push(node.left)
        else leftLevel = level
        if (node.right) queue.push(node.right)
        else rightLevel = level
        level++
        console.log(leftLevel, rightLevel, level, queue)
        if (queue !== null) {
            depthFirstSearch(queue.shift())
        } else return true
    }
};

