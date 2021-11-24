var fib = function (n, memo = {}) {
  if (memo[n]) return memo[n]; // if the number is already in the memo, then pass it down, inductive step
  if (n < 2) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
