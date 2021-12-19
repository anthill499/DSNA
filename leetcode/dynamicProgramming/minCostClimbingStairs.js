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
