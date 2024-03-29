class Stack {
  constructor(items = []) {
    this.items = items;
  }

  push(value) {
    this.items.push(value);
  }

  peek() {
    const topMostValue = this.items[this.items.length - 1];
    return topMostValue === undefined ? null : topMostValue;
  }

  pop() {
    const removedValue = this.items.pop();
    return removedValue !== undefined ? removedValue : null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  search(value) {
    const l = this.items.length;
    if (l === 0) return -1;
    for (let index = 0; index < l; index++) {
      if (this.items[index] === value) {
        return l - index;
      }
    }
    return -1;
  }

  size() {
    return this.items.length;
  }
}

// const stack = new Stack();
const stack = new Stack([]);

console.log(stack.size());
