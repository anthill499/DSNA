var hasCycle = function (head) {
  if (!head || !head.next) return false;
  const store = new Set();
  let curr = head;
  while (curr) {
    const lastSize = store.size;
    store.add(curr);
    const newSize = store.size;
    if (lastSize === newSize) return true;
    curr = curr.next;
  }
  return false;
};
