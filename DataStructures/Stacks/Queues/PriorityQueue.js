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
    this.printPriorityQueue();
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

  enqueue(val) {
    // if value is larger than head
    if (this.compare(this.list.head, val) === -1) {
      this.list.addToHead(val);
      return;
    }

    // if value is less than tail's value
    if (this.compare(this.list.tail, val) === 1) {
      this.list.append(val);
      return;
    }
  }

  printPriorityQueue() {
    const list = this.list.printList();
    console.table({
      "Priority Queue Representation": list,
      "Priority Queue": this.list,
    });
  }
}

const pq = new PriorityQueue();
console.log(pq);
// console.log(pq.isEmpty());
// console.log(pq.size());
// console.log(pq.peek());
