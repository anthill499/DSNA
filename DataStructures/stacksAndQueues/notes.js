// Stacks Data Structure
// Last In First Out
class Stack {
  constructor() {
    this.storage = [];
  }
  push(val) {
    this.storage.push(val);
  }
  pop() {
    if (this.size() === 0) {
      return -1;
    } else {
      this.storage.pop();
      return this.storage;
    }
  }
  peek() {
    return this.storage[this.size() - 1];
  }
  size() {
    return this.storage.length;
  }
}
// Queue
// First In, First Out
class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(val) {
    this.storage.push(val);
  }
  dequeue() {
    this.storage.unshift();
  }
  front() {
    return this.storage[0];
  }
  back() {
    return this.storage[this.storage.length - 1];
  }
  print() {
    return this.storage;
  }
  size() {
    return this.storage.length;
  }
  isEmpty() {
    return this.storage.length === 0;
  }
}

// passes an array into enqueue [value, priority]
class PriorityQueue {
  constructor() {
    this.storage = [];
  }
  enqueue(val) {
    if (this.isEmpty()) {
      this.storage.push(val);
    } else {
      let added = false;
      for (let i = 0; i < this.storage.length; i++) {
        if (val[1] < this.storage[i][1]) {
          // if statement checks if priority of the current element is greater than the input priority
          this.storage.splice(i, 0, val);
          added = true;
          break;
        }
      }
      if (!added) {
        this.storage.push(val);
      }
    }
  }
  dequeue() {
    this.storage.unshift();
  }
  front() {
    return this.storage[0];
  }
  back() {
    return this.storage[this.storage.length - 1];
  }
  print() {
    return this.storage;
  }
  size() {
    return this.storage.length;
  }
  isEmpty() {
    return this.storage.length === 0;
  }
}
