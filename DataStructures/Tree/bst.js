// Binary Tree = Only two subtrees per Node

// Class for each individual node in the Tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Adding something to the tree
  add(inputData) {
    const currNode = this.root;
    if (!currNode) {
      this.root = new Node(inputData); // left and right are filled later w potential nodes
    } else {
      // if there is a root, create a recursive function
      // Should be around O(log N)
      const searchTree = (node) => {
        if (inputData < node.data) {
          // value is less than current node's data
          if (!node.left) {
            // if there isn't a left node
            node.left = new Node(inputData);
          } else {
            // recursively search the left side of the input node
            return searchTree(node.left);
          }
        } else if (inputData > node.data) {
          if (!node.right) {
            node.right = new Node(inputData);
          } else {
            return searchTree(node.right);
          }
        } else {
          // if inputData === node.data
          return null;
        }
      };
      return searchTree(currNode); // invokes the searchTree function
    }
  }

  // find the minimum number on a BST, all the way on the left
  findMin() {
    let currNode = this.root;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  //find the max number on a BST, all the way on the right
  findMax() {
    let currNode = this.root;
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }

  find(inputData) {
    let currNode = this.root;
    while (currNode.data !== inputData) {
      // continuously reassigns currNode until we either return null or currNode(if found);
      if (inputData < currNode.data) {
        currNode = currNode.left;
      } else if (inputData > currNode.data) {
        currNode = currNode.right;
      }
      if (!currNode) return null;
      // won't be hit if the inputData is found
    }
    // won't be hit if inputData is not present;
    return currNode;
  }

  // Removing an Node from BST
  remove(inputData) {}
}

// Notes
// Use while loops to solve through BST finds
