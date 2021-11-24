var middleNode = function (head) {
  const values = [];
  let curr = head;
  while (curr) {
    values.push(curr);
    curr = curr.next;
  }
  const mid = Math.floor(values.length / 2);
  let i = 0;
  curr = head;
  while (curr) {
    if (i === mid) return curr;
    i++;
    curr = curr.next;
  }
};
