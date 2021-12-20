var getIntersectionNode = function (headA, headB) {
  if ((!headA && headB) || (headA && !headB)) return null;
  const store = new Set();
  let curr = headA;
  while (curr) {
    // if it was curr.next, it'll stop early
    store.add(curr);
    curr = curr.next;
  }
  let currTwo = headB;
  while (currTwo) {
    if (store.has(currTwo)) return currTwo;
    currTwo = currTwo.next;
  }
  return null;
};
