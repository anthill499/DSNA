var rangeSumBST = function (root, low, high) {
  if (!root) return 0;
  let sum = 0;
  const queue = [root];
  while (queue.length > 0) {
    let curr = queue.shift();
    if (low <= curr.val && curr.val <= high) {
      sum += curr.val;
    }
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return sum;
};

const rangeSumBST = (root, low, high) => {
  if (!root) return 0;
  let sum = 0;
  if (root.val >= low && root.val <= high) sum += root.val;
  return (
    sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
  );
};

const rangeSumBST = (root, low, high) => {
  if (!root) return 0;
  let curr = 0;
  if (root.val >= low && root.val <= high) curr += root.val;
  let left = root.val > low ? rangeSumBST(root.left, low, high) : 0;
  let right = root.val < high ? rangeSumBST(root.right, low, high) : 0;
  return curr + left + right;
};
