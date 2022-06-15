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
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0
    
    // depth search
    // if the curr node is not null
        // ++currDepth
        // recursively call the function on the left side, currDepth
        // recursively call the function on the right side, currDepth\
    // else maxDepth = Math.max(maxDepth, currDepth)
    
    depthForNode(root, 0)
    
    function depthForNode(node, currDepth) {
        if (node) {
            ++currDepth
            depthForNode(node.left, currDepth)
            depthForNode(node.right, currDepth)
        } else {
            maxDepth = Math.max(maxDepth, currDepth)        
        }
    }
    
    return maxDepth
};