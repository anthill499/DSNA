// import { ListNode } from "../linkedlists/listnode";
import LinkedList from "../../linkedlists/linkedlist.js";
import { ListNode } from "../../linkedlists/listnode.js";
// Try implementing with LinkedList class

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  // Next element in queue
  peek() {
    return this.list.head;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  // add to queue
  enqueue(val) {
    this.list.append(val);
  }

  // Remove next element in queue, its value is returned.
  dequeue(val) {
    this.list.removeHead(val);
  }

  // Printing entire queue to console
  printQueue() {
    this.list.printList();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue();
