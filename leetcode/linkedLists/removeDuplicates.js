let currNode = head;
while (currNode && currNode.next) {
  if (currNode.val === currNode.next.val) {
    currNode.next = currNode.next.next;
  } else {
    currNode = currNode.next;
  }
}
return head;

// Remove Duplicates II
