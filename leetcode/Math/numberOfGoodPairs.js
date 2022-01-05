var numIdenticalPairs = function (nums) {
  const store = {};
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]]) output += store[nums[i]];
    store[nums[i]] = store[nums[i]] ? store[nums[i]] + 1 : 1;
  }
  return output;
};
