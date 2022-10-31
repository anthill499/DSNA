import { ListNode } from "./listnode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  append(value) {
    const newNode = new ListNode(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  removeHead() {
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

  addToHead(val) {
    const newNode = new ListNode(val);

    // Keep track of current head
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    }
    this.size++;
  }

  // Printing entire queue to console
  printList() {
    let list = "";
    let curr = this.head;
    while (curr) {
      list = list + curr.value.toString() + " -> ";
      curr = curr.next;
    }
    list += "null";
    return list;
  }
}
