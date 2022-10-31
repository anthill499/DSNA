import Queue from "./Queue.js";
import { ListNode } from "../../linkedlists/listnode.js";

const ascendingComparater = (valueA, valueB) => {
  // Ascending
  if (valueA < valueB) {
    return -1;
  } else if (valueA > valueB) {
    return 1;
  } else {
    return 0;
  }
};

export default class PriorityQueue extends Queue {
  constructor(comparater = ascendingComparater) {
    super(); // Must call super constructor in
    // derived class before accessing 'this'
    this.compare = comparater;
  }

  // Next element in Priority Queue
  peek() {
    return super.peek();
  }

  isEmpty() {
    return super.isEmpty();
  }

  size() {
    return super.size();
  }

  
  // Add value to queue based on value of comparater
  enqueue(val) {
    // if there is no head in linked list.
    if (this.isEmpty() === true) {
      this.list.addToHead(val); return;
    }

    // if value is larger than head
    if (this.compare(this.list.head.value, val) === -1) {
      this.list.addToHead(val); return;
    }

    // if value is less than tail's value
    const comparedToTail = this.compare(this.list.tail.value, val)
    if (comparedToTail === 1 || comparedToTail === 0) {
      this.list.append(val);
      return;
    }

    // Iterate over Queue to insert
    let currentNode = this.list.head;

    while (currentNode) {
      const comparison = this.compare(currentNode.value, val);
      switch(comparison) {
        case 1: 
          // current node value is larger, move on
          break;
        case 0: 
          if (!currentNode.next) {
            this.list.append(val); finished = true; return;
          } 
          break;
        case -1: // current node value is smaller than val
          this.list.insert(currentNode, val); return;
      }
      currentNode = currentNode.next;
    }
    console.log('Enqueue complete')
  }

  dequeue() {
    return super.dequeue();
  }

  
  printPriorityQueue() {
    const list = this.list.printList();
    console.table({
      "Priority Queue Representation": {list},
      "Priority Queue": this.list,
    });
  }
}

const pq = new PriorityQueue();
pq.enqueue(100)
pq.enqueue(30)
pq.enqueue(50)
pq.enqueue(50)
pq.enqueue(50)





pq.printPriorityQueue()
