class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
  
    popMin() {
      if (this.size === 0) {
        return null
      }
      console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
      this.swap(1, this.size);
      const min = this.heap.pop();
      this.size--;
      console.log(`.. Removed ${min} from heap`);
      console.log('..',this.heap);
      this.heapify()
      return min;
    }
  
    add(value) {
      console.log(`.. adding ${value}`);
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
      console.log(`added ${value} to heap`, this.heap);
    }
  
    bubbleUp() {
      let current = this.size;
      while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
        console.log(`.. swap ${this.heap[current]} with parent ${this.heap[getParent(current)]}`);
        this.swap(current, getParent(current));
        console.log('..', this.heap);
        current = getParent(current);
      }
    }
  
    heapify() {
      console.log('Heapify');
      let current = 1;
      let leftChild = getLeft(current);
      let rightChild = getRight(current);
      
      while (this.canSwap(current, leftChild, rightChild)) {
        if(this.exists(leftChild) && this.exists(rightChild)) {
          if(this.heap[leftChild] < this.heap[rightChild]) {
            this.swap(leftChild, current)
            current = leftChild
          } else if(this.heap[rightChild] < this.heap[leftChild]){
              this.swap(rightChild, current)
              current = rightChild
  
          }
        } else {
          this.swap(current, leftChild)
          current = leftChild
        }
        leftChild = getLeft(current);
        rightChild = getRight(current);
      }
    }
  
    exists(index) {
      return index <= this.size;
    }
  
    canSwap(current, leftChild, rightChild) {
      // Check that one of the possible swap conditions exists
      return (
        this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
        || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
      );
    }
  
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = MinHeap;
  