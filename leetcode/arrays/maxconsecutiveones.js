// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Kadane's ?

const findMaxConsecutiveOnes = function (nums) {
  let globMax = 0;
  let locMax = 0;
  nums.reduce((acc, current) => {
    if (current === 1) {
      locMax += current;
    } else {
      locMax = current;
    }
    if (locMax > globMax) {
      globMax = locMax;
    }
  }, locMax);
  return globMax;
};

// Time Complexity = O(n);
// Space Complexity = O(1);
