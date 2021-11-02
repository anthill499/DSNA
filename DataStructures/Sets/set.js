// Set is an array that has unique values

class Set {
  constructor() {
    this.collection = [];
  }
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }
}
