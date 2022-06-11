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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    
    // create a function, given a node, it will flip its left and right nodes.
    if (root === null || root.length < 2) return root
    
    invert(root)
    
    function invert(node) {
        swap(node)
        
        try {
                invert(node.left)
        } catch {
            
        }
        
        try {
                 invert(node.right)
        } catch {

        }
        
    }
    
    function swap(node) {
        holder = node.right
        node.right = node.left
        node.left = holder
        console.log(node)
    }
    
    return root
};