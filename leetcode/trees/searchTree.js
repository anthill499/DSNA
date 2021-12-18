// BFS
var searchBST = function (root, val) {
  if (!root) return null;
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.val === val) {
      return curr;
    }
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return null;
};

// DFS
const searchBST = (root, val) => {
  if (!root) return null;
  if (root.val === val) return root;
  return searchBST(root.left, val) || searchBST(root.right, val);
};
