var binaryTreePaths = function (root, pathString = ``) {
  if (!root) return [];
  if (!root.left && !root.right) {
    return [pathString + `${root.val}`];
  }
  return [].concat(
    binaryTreePaths(root.left, pathString + `${root.val}->`),
    binaryTreePaths(root.right, pathString + `${root.val}->`)
  );
};
