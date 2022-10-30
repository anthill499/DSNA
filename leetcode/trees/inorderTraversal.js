var inorderTraversal = function (root) {
  const stack = [];
  if (!root) return stack;
  const dfs = (node) => {
    if (!node) return null;
    console.log(node, stack);
    dfs(node.left);
    stack.push(node.val);
    dfs(node.right);
    return node;
  };
  dfs(root);
  return stack;
};
