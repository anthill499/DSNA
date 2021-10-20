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
  }

  reverse() {
    let prevNode = this.head;
    let currNode = this.head.next;
    this.head.next = null;
    let nextNode;
    while (currNode.next) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    return this;
  }
}

// A -> B -> C -> D  Output: A <- B <- C <- D

// prev A
// curr B
// A -> B -> C -> D

// A     B -> C -> D line
// A <- B   C -> D

// nextNode D
// prevNode B
// currNode C
// A <- B <- C -> D
