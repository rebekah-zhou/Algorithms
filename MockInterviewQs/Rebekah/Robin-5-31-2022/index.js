// Question: Implement a queue using two stacks.


// Clarification: only use push/pop



// Test Cases: 

// construct a queue, use enqueue and dequeue


// Pseudocode:

// stack class -- only have push from head, pop from head. 
// push (adds a value to the head)

class Stack {
    constructor() {
        this.stack = []

    }
}

// construct the queue, takes a parameter, sets the head of the queue as the head of a stack (headStack) push/pop
// construct the tail as the head of another stack (tailStack) 


// enqueue method (push to tail), value as a parameter
// push that value to the head tailStack 


// dequeue method (pop from head)  (pop from one stack, push to other stack)

// grab the e
// headStack pop 


class Queue {
    constructor() {
        this.headStack = new Stack
        this.tailStack = new Stack
    }

}
