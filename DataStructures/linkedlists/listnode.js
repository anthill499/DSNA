// singly linked list
export class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Doubly LinkedList
// Each node holds a reference to the next node
export class DoublyListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
