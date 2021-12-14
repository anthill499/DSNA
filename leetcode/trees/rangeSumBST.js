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
    rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high) + sum
  );
};

var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const rageSum = (root) => {
    if (!root) {
      return null;
    }
    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }
    if (root.left) {
      rageSum(root.left);
    }
    if (root.right) {
      rageSum(root.right);
    }
  };
  rageSum(root);
  return sum;
};
