/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Base case: 
    
    if (list1 === null) return list2
    if (list2 === null) return list1
    
    // Two pointers, one for each list that points to the current node.
    // Determine the start of the mergedList
    // If currentNode1 <= currentNode2, set currentNode1 to start of mergedList
    // move currentNode1 to next node
    // Else set currentNode2 to start of mergedList
    // 
    
    let currentNode1 = list1
    let currentNode2 = list2
    let mergedList
       
    if (currentNode1.val <= currentNode2.val) {
        mergedList = currentNode1
        currentNode1 = currentNode1.next
    } else {
        mergedList = currentNode2 
        currentNode2 = currentNode2.next
    }
    
    let mergedNode = mergedList
    
    while(currentNode1 && currentNode2) {
        if (currentNode1.val <= currentNode2.val) {
            mergedNode.next = currentNode1
            mergedNode = currentNode1
            currentNode1 = currentNode1.next 
     
        } else {
            mergedNode.next = currentNode2
            mergedNode = currentNode2
            currentNode2 = currentNode2.next
  
        }
    }
    
    if (currentNode1) {
        mergedNode.next = currentNode1
    }
    
    if (currentNode2) {
        mergedNode.next = currentNode2
    }
    
    return mergedList
    
    // while loop (currentNode1 && currentNode2)
    // if currentNode1 <= currentNode2 
    // set the next value of the mergedList to currentNode1
    // currentNode1 = currenntNode1.next 
    // else 
    // set the next value of the mergedList to currentNode2 
    // currentNode2 = currentNode2.next 
    
    
    // catenate the mergedlist with the rest of currentNode1 or currentNode2
};