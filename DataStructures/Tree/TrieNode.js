export default class TrieNode {
  static #LIMIT = 26;
  constructor(value) {
    this.value = value;
    this.children = new Array(TrieNode.#LIMIT);
  }

  wordCount() {
    // recursive or iterative
  }
}
