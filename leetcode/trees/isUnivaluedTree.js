var isUnivalTree = function (root, uniValue = root.val) {
  if (!root) return true;
  if (uniValue !== root.val) return false;
  if (!root.left && !root.right) return true;
  return (
    isUnivalTree(root.left, root.val) && isUnivalTree(root.right, root.val)
  );
};
