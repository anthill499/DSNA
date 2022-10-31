import { ListNode } from "../linkedlists/listnode.js";

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Size of our queue
  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  // Top element of queue
  peek() {
    return this.head;
  }

  // adding element to queue
  enqueue(val) {
    const newNode = new ListNode(val);
    switch (this.size) {
      case 0: // if queue is empty
        this.head = newNode;
        this.tail = newNode;
        this.size++;
        return;
      case 1: // if queue only has one node
        this.tail = newNode;
        this.head.next = this.tail;
        this.size++;
        return;
      default: // if queue only 2+ nodes
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
        return;
    }
  }

  // removing next element in queue
  dequeue() {
    const result = this.head;
    switch (this.size) {
      case 0:
        return;
      case 1:
        this.head = null;
        this.tail = null;
        this.size--;
        return result;
      default:
        this.head = this.head.next;
        this.size--;
        return result;
    }
  }

  // Printing entire queue to console
  list() {
    let list = "";
    let curr = this.head;
    while (curr) {
      list = list + curr.value.toString() + " -> ";
      curr = curr.next;
    }
    list += "null";
    console.table({
      list,
      "Time Complexity": "O(N)",
      "Space Complexity": "O(N)",
      queue: this,
    });
    return list;
  }
}
