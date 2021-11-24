var isPalindrome = function (head) {
  let [values, curr, pA] = [[], head, 0];
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }
  let pB = values.length - 1;
  while (pB > pA) {
    if (values[pA] !== values[pB]) return false;
    pA++;
    pB--;
  }
  return true;
};
