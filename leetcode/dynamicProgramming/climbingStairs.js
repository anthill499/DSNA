let climbStairs = function (n) {
  const perms = [1, 2];
  for (let i = 2; i < n; i++) {
    perms.push(perms[i - 1] + perms[i - 2]);
  }
  return perms[n - 1];
};
