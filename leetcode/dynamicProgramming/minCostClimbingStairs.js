var minCostClimbingStairs = function (cost) {
  const findSum = (array, store = {}) => {
    // base case
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    // inductive step
    if (store[array]) return store[array];
    const sum =
      array[0] +
      Math.min(findSum(array.slice(1), store), findSum(array.slice(2), store));
    store[array] = sum;
    return sum;
  };
  return Math.min(findSum(cost, {}), findSum(cost.slice(1), {}));
};

// Key Takeaway
// Time Complexity: O(2^n)

// More optimized solution
// Time Complexity: O(2^n)
// Memoization
var minCostClimbingStairs = function (cost) {
  if (cost.length < 3) return Math.min(...cost);
  const store = {};
  const findSum = (array, hash = store) => {
    // base case
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    // inductive step
    if (hash[array]) return hash[array];
    const sum =
      array[0] +
      Math.min(findSum(array.slice(1), hash), findSum(array.slice(2), hash));
    hash[array] = sum;
    return sum;
  };

  const wholeSum = findSum(cost, store);
  return Math.min(wholeSum, store[cost.slice(1)]);
};
