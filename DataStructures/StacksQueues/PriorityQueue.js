import Queue from "./Queue.js";

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
      this.list.addToHead(val);
      return;
    }

    // if value is larger than head
    if (this.compare(this.list.head.value, val) === -1) {
      this.list.addToHead(val);
      return;
    }

    // if value is less than tail's value
    const comparedToTail = this.compare(this.list.tail.value, val);
    if (comparedToTail === 1 || comparedToTail === 0) {
      this.list.append(val);
      return;
    }

    // Iterate over Queue to insert
    let currentNode = this.list.head;

    while (currentNode) {
      const comparison = this.compare(currentNode.value, val);
      switch (comparison) {
        case 1:
          // current node value is larger, move on
          break;
        case 0:
          if (!currentNode.next) {
            this.list.append(val);
            finished = true;
            return;
          }
          break;
        case -1: // current node value is smaller than val
          this.list.insert(currentNode, val, !currentNode.next);
          return;
      }
      currentNode = currentNode.next;
    }
  }

  dequeue() {
    if (this.isEmpty() === true) {
      return "There are no elements left";
    }
    return super.dequeue();
  }

  printPriorityQueue() {
    const list = this.list.printList();
    console.table({
      "Priority Queue Representation": { list },
      "Priority Queue": this.list,
    });
  }
}

function ListNode(val, next = null) {
    this.val = val
    this.next = next;
  }
   
class PriorityQueueForLeetCode {
  constructor(comparater = ascendingComparater) {
    this.head = null;
    this.tail = null;
    this.numItems = 0;
    this.compare = comparater;
  }

  isEmpty() {
    return this.numItems === 0;
  }

  size() {
    return this.numItems;
  }

  enqueue(value) {
    const newNode = new ListNode(value)
    if (this.isEmpty() === true) {
      this.head = newNode;
      this.tail = newNode;
      this.numItems++; return;
    }

    if (value >= this.tail.val) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.numItems++; return;
    }

    let currentNode = this.head;
    let count = 1;
    // Keeps track of where we are in the list;
    while (currentNode) {
      const comparedValue = this.compare(value, currentNode.val);
      console.log(comparedValue, currentNode)
      switch(comparedValue) {
        case -1:
          const temp = currentNode;
          newNode.next = temp;
          currentNode = newNode;
          this.numItems++; 
          if (count === 1) {
            this.head = currentNode;
          }
          return;
        case 0:
          break;
        case 1:
          break;
      }
      currentNode = currentNode.next;
      count++;
    }
    return null;
  }

  printList() {
    let list = "";
    let curr = this.head;
    while (curr) {
      list = list + curr.val.toString() + " -> ";
      curr = curr.next;
    }
    list += "null";
    console.table({list, head: this.head, tail: this.tail})
    return list;
  }
}

const priorityQueue = new PriorityQueueForLeetCode()
priorityQueue.enqueue(2)
priorityQueue.enqueue(5)
priorityQueue.enqueue(5)
priorityQueue.enqueue(10)
priorityQueue.enqueue(1)
priorityQueue.enqueue(1)




priorityQueue.printList()

