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
