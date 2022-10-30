const addLeaves = (root, array) => {
  if (!root) return;
  if (!root.left && !root.right) array.push(root.val);
  addLeaves(root.left, array);
  addLeaves(root.right, array);
};

var leafSimilar = function (root1, root2) {
  const leafOne = [];
  const leafTwo = [];
  addLeaves(root1, leafOne);
  addLeaves(root2, leafTwo);
  console.log(leafOne, leafTwo);
  while (leafOne.length > 0 && leafTwo.length > 0) {
    const popOne = leafOne.pop();
    const popTwo = leafTwo.pop();
    if (popOne !== popTwo) return false;
  }
  return leafOne.length === 0 && leafTwo.length === 0;
};
