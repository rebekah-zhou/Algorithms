/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) return head
    
    while (head.val === val) {
        if (head.next) {
            head = head.next
        } else {
            return null
        }
    }
    
    let prevNode = head
    let currNode = head.next

    while (currNode) {
        if (currNode.val === val) {
            prevNode.next = currNode.next
            currNode.next = null
            currNode = prevNode.next
        } else {
            prevNode = currNode
            currNode = currNode.next
        }
    }
    
    return head
};