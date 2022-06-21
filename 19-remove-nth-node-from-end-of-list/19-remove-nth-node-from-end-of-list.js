/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // two pointers
    // start first pointer, with a counter
    // once the counter === n, set the second pointer = head.
    // once the first pointer == null, remove the node at the second pointer
    
    if (head.next === null && n === 1) return null
    
    let pointer1 = head
    let pointer2
    let count = 1
    
    while(pointer1 !== null) {
        if (count === n + 1) {
            pointer2 = head
        } else if (count > n) {
            pointer2 = pointer2.next     
        } 
        pointer1 = pointer1.next
        count++
    }
    
    if (pointer2) {
        const nodeToRemove = pointer2.next 
        pointer2.next = pointer2.next.next 
        nodeToRemove.next = null
    } else {
        head = head.next
    }
    
    return head
};