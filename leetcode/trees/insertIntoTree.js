var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  if (!root) return newNode;
  if (!root.left && root.val > val) {
    root.left = newNode;
  }
  if (!root.right && root.val < val) {
    root.right = newNode;
  }
  // more logic
  if (root.val < val) {
    insertIntoBST(root.right, val);
  }
  if (root.val > val) {
    insertIntoBST(root.left, val);
  }
  return root;
};
