//Given an array nums of integers, return how many of them contain an even number of digits.
// Input: nums = [12,345,2,6,7896]
// Output: 2

const findNumbers = function (nums) {
  const newArr = nums.filter((ele) => ("" + ele).length % 2 === 0);
  return newArr.length;
};
