// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function (nums) {
  let arr = nums.map((num) => Math.pow(num, 2)).sort(compareNumbers);
  return arr;
};

function compareNumbers(a, b) {
  return a - b;
}
