// Can implement a Doubly Linked List or Map

// Map Implementation
// Map methods, size, clear, delete, get, has, set
// get method, takes element and brings it up to the front
// put sets the the key and value
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (this.map.has(key)) {
      // if it has the key; keep hold of the value bc we will delete it
      const val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, val);
      // takes the element from wherever position and puts it to the "front" of the map
      return val;
    } else {
      return -1;
    }
  }

  put(key, val) {
    if (this.get(key) === -1) {
      if (this.map.size === this.capacity) {
        for (let val of this.map) {
          this.map.delete(val[0]);
          // val returns Array [key, val]
          // deletes the first value from Map and breaks loop
          break;
        }
      }
    }
    this.map.set(key, val);
  }
}
