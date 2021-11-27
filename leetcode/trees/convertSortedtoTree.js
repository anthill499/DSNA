var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  let mid = Math.floor(nums.length / 2);
  let curr = new TreeNode(nums[mid]);
  curr.left = sortedArrayToBST(nums.slice(0, mid));
  curr.right = sortedArrayToBST(nums.slice(mid + 1));
  return curr;
};
