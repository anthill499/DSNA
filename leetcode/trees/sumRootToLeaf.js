var sumNumbers = function (root) {
  const stringNums = [];
  const dfs = (node, string) => {
    if (!node) return;
    if (!node.left && !node.right) {
      stringNums.push(string + node.val);
      return;
    }
    dfs(node.left, string + node.val);
    dfs(node.right, string + node.val);
  };
  dfs(root, "");
  return stringNums.reduce((acc, ele) => parseInt(acc) + parseInt(ele), 0);
};
