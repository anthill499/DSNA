var findTarget = function (root, k) {
  const store = {};
  const dfs = (root) => {
    if (!root) return false;
    const diff = k - root.val;
    if (store[root.val] === diff) return true;
    store[diff] = root.val;
    return dfs(root.left) || dfs(root.right);
  };
  return dfs(root);
};

var findTarget2 = function (root, k) {
  const store = {};
  let hasTarget = false; // return this at end of function

  const dfs = (root) => {
    if (!root) return null;
    const diff = k - root.val;
    if (store[root.val] === diff) {
      hasTarget = true;
    }
    store[diff] = root.val;
    if (!hasTarget) {
      dfs(root.left);
      dfs(root.right);
    }
  };
  dfs(root);
  return hasTarget;
};
