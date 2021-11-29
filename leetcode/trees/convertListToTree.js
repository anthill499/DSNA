var sortedListToBST = function (head) {
  const nums = convertList(head); // O(N)
  // convert list to array
  const bst = (arr = nums) => {
    // O(logN)
    if (arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);
    const midNode = new TreeNode(arr[mid]);
    // find middle node
    const curr = midNode;
    curr.left = bst(arr.slice(0, mid));
    curr.right = bst(arr.slice(mid + 1));
    return curr;
  };
  return bst(nums);
};

const convertList = (node) => {
  const arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
};
