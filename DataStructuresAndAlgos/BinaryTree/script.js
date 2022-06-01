const BinaryTree = require('./BinaryTree');
const bt = new BinaryTree(15);
let numbers = [ 12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25 ];

for (let i = 0; i < numbers.length; i++) {
  bt.insert(numbers[i]);
  console.log(`Insert ${numbers[i]} to binary tree`);
}

console.log('Depth First Traversal');
bt.depthFirstTraversal();
