var invertTree = function (root) {
  if (!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.right = left;
  root.left = right;
  return root;
};
