var deleteMiddle = function (head) {
  if (!head || !head.next) return null; // takes care of edge cases
  let listLength = 0; // finds length of linked list
  let curr = head;
  while (curr) {
    listLength++;
    curr = curr.next;
  }
  curr = head;
  const firstNode = curr;
  const mid = Math.floor(listLength / 2); // mid index;
  let counter = 0;
  while (counter !== mid - 1) {
    counter++;
    curr = curr?.next;
  }
  const temp = curr.next.next;
  curr.next.next = null;
  curr.next = temp;
  return firstNode;
};
