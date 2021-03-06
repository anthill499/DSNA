const reverseList = (head) => {
  // iterative
  if (!head) return null; // returns null if head is null;
  let curr = head;
  let nextNode = curr.next;
  let temp = nextNode?.next; // holds the 3rd node during switch
  curr.next = null; // for the head to point to nothing.
  // start iteration
  while (nextNode) {
    nextNode.next = curr;
    curr = nextNode;
    nextNode = temp;
    temp = temp?.next;
  }
  return curr;
};

// Time Complexity = O(N)
// Space Complexity = O(1)
