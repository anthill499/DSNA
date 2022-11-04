import TrieNode from "./TrieNode.js";
export default class Trie {
  static #ascii = "abcdefghijklmnopqrstuvwxyz";
  static #LIMIT = 26;
  constructor() {
    this.root = null;
    this.children = new Array(Trie.#LIMIT);
  }

  static pointerPosition = (letter) => {
    return Trie.#ascii.indexOf(letter);
  };

  add(word) {
    if (word.length === 0) {
      return null;
    }
    let currentNode = null;
    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
      const pos = Trie.pointerPosition(currentLetter);
      if (i === 0) {
        // first letter
        if (this.children[pos] === undefined) {
          const newNode = new TrieNode(currentLetter);
          this.children[pos] = newNode;
        }
        currentNode = this.children[pos];
      } else {
        // every other letter
        this.insertAtNode(currentNode, currentLetter);
      }
    }
    return null;
  }

  insertAtNode(node, letter) {}

  totalWordCount() {
    // recursive or iterative
  }

  printTrie = () => {
    console.log(this.children);
  };
}

const trie = new Trie();
// console.log(Trie.pointerPosition("f"));
const Words = ["flower", "flow", "flight"];
for (const word of Words) {
  trie.add(word);
}
trie.printTrie();
