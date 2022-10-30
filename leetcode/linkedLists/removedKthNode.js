var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  while (fast.next) {
    if (n) {
      n--;
    } else {
      slow = slow.next;
    }
    fast = fast.next;
  }
  if (n === 1) {
    head = head.next;
  } else {
    slow.next = slow.next.next;
  }
  return head;
};
