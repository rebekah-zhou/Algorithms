/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    try {
        head.next
    } catch(e) {
        return head
    }
 
    let prevNode = null
    let currNode = head
    let nextNode = head.next
 
     do {
        currNode.next = prevNode
        
        prevNode = currNode
        currNode = nextNode
        try {
            nextNode = nextNode.next
        } catch(e) {

        }

    } while(currNode)
    
    return prevNode
};

// 2 3 4 5 1
// 3 4 5 2 1 
// 