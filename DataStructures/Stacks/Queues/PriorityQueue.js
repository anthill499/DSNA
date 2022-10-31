import LinkedList from "../../linkedlists/linkedlist.js";
import Queue from "./Queue.js";
export default class PriorityQueue extends Queue {
  constructor() {
    super(); // Must call super constructor in
    // derived class before accessing 'this'
    this.printPriorityQueue();
  }

  peek() {
    return super.peek();
  }

  isEmpty() {
    return super.isEmpty();
  }

  size() {
    return super.size();
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
