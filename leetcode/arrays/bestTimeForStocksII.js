var maxProfit = function (prices) {
  let totalProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    totalProfit += Math.max(0, prices[i] - prices[i - 1]);
  }
  return totalProfit;
};
