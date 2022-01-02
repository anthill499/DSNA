var generateParenthesis = function (n) {
  const result = [];
  const recursive = (string, numForwards, numBackwards) => {
    if (string.length === n * 2) {
      result.push(string);
      return;
    }
    if (numForwards !== 0)
      recursive(string + "(", numForwards - 1, numBackwards);
    if (numBackwards !== 0 && numForwards !== numBackwards)
      recursive(string + ")", numForwards, numBackwards - 1);
  };
  recursive("(", n - 1, n);
  return result;
};
