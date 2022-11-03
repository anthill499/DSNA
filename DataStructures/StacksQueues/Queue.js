import LinkedList from "../linkedlists/linkedlist.js"
// Try implementing with LinkedList class

export default class Queue {
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

  size() {
    return this.list.size;
  }

  // add to queue
  enqueue(val) {
    this.list.append(val);
  }

  // Remove next element in queue, its value is returned.
  dequeue() {
    return this.list.removeHead();
  }

  // Printing entire queue to console
  printQueue() {
    const list = this.list.printList();
    console.table({
      "Queue Representation": list,
      Queue: this.list,
    });
  }
}
