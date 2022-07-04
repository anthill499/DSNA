const maxProfit = function (prices) {
  let globalMax = 0; // keeping track of global max profit
  let lowest = prices[0]; // keep track on lowest price only
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - lowest;
    if (profit > globalMax) globalMax = profit;
    if (prices[i] < lowest) lowest = prices[i];
  }
  return globalMax <= 0 ? 0 : globalMax;
};

// const array = [5, 7, 2, 1, 22]

// [2, 17, 2, 21, 25];
