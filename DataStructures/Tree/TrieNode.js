const ALPHABET_SIZE = 26;

class TrieMap extends Map {
  constructor() {
    super();
    this.limit = ALPHABET_SIZE;
  }
  set(value) {
    if (super.size() === this.limit) {
      return;
    }
    if (!super.has(value)) {
      super.set(value, new TrieNode(value));
    }
  }

  has() {}
}
export default class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = new TrieMap();
    this.isEndOfWord = true;
    this.wordCount = 0;
  }

  wordCount() {
    return this.wordCount;
  }
}
