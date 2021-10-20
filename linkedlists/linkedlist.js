import ListNode from "./listnode";

export default class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // return this;
  }
}

// A -> B -> C -> D
// A -> B -> D

// A -> B
// A
