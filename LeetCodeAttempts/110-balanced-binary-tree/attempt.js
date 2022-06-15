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

// passes 219/228 cases
// fails on edge case 

 var isBalanced = function(root) {
    
    // create a maxDepth 
    // depth first search 
    // if the diff btwn maxDepth and currDepth is > 1, return false
    
    let maxDepth = 0
    let minDepth
    
    bfs(root, 0)
    
    function dfs(node, currDepth) {
         if (node) {
             ++currDepth  
             console.log(`currNode: ${node.val}, currDepth: ${currDepth}`)
             dfs(node.left, currDepth)
             dfs(node.right, currDepth)
         } else {
             minDepth = Math.min(minDepth, currDepth) || currDepth
             maxDepth = Math.max(maxDepth, currDepth)
             console.log(minDepth, currDepth, maxDepth)
             console.log(Math.abs(maxDepth - minDepth))
         }
            
    }
    
    console.log(`${minDepth}, ${maxDepth}`)
    
    return Math.abs(maxDepth-minDepth) <= 1
};