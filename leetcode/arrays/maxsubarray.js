// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

function maxSubArray(nums) {
  let globMax = 0;
  let locMax = 0;
  if (nums.length === 1 || nums.every((num) => num < 0)) {
    // O(n) time, array iteration
    return Math.max(...nums);
  }
  for (let i = 0; i < nums.length; i++) {
    // O(n) time, array iteration
    locMax += nums[i];
    if (locMax < 0) {
      locMax = 0;
    }
    if (locMax > globMax) {
      globMax = locMax;
    }
  }
  return globMax;
}

// [1, -1, 5, 4, -2] => 9
// [1, -2, 7, -4, 11] => 14
