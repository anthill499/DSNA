var isPalindrome = function (head) {
  let values = [];
  let curr = head;
  let pA = 0;
  let pB = values.length - 1;
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }
  while (pB > pA) {
    if (values[pA] !== values[pB]) return false;
    pA++;
    pB--;
  }
  return true;
};

// Time Complexity O(N)
// Space Complexity O(N)
