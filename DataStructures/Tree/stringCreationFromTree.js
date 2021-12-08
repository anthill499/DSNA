class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const strToBST = (string) => {
  if (!string || string.length === 0) return null;
  const arr = string.split(".");
  const topNode = new TreeNode(arr[0]);
  for (let val of arr.slice(1)) {
    // ["cat", "air", "area"]
    insertString(topNode, val);
  }
  return topNode;
};

const insertString = (root, string) => {
  if (root.val > string) {
    // put string to left side, could be recursive
    if (root.left) {
      insertString(root.left, string);
    } else {
      root.left = new TreeNode(string);
    }
  } else {
    // put string to right side, could be recursive
    if (root.right) {
      insertString(root.right, string);
    } else {
      root.right = new TreeNode(string);
    }
  }
  return;
};

window.topNode = strToBST("house.cat.air.area.bonk.html.htauda");
// console.log();

// air.cat

const grabData = (string) => {};
