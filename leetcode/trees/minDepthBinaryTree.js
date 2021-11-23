var minDepth = function (root) {
  if (!root) return null;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  if (!left) return right + 1;
  if (!right) return left + 1;
  const min = Math.min(left, right);
  return min + 1;
};
