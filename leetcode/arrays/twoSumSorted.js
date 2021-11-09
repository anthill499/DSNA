var twoSum = function (numbers, target) {
  let pA = 0;
  let pB = numbers.length - 1;
  while (pB > pA) {
    if (numbers[pA] + numbers[pB] > target) {
      pB--;
    } else if (numbers[pA] + numbers[pB] < target) {
      pA++;
    } else {
      return [pA + 1, pB + 1];
    }
  }
};

// Use two pointers method
// Decrease slowly to minimize risk of (lower bound + higher)
// to still be higher than target.
