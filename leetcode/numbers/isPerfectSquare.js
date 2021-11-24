var isPerfectSquare = function (num) {
  let curr = 1;
  while (curr * curr <= num) {
    if (curr * curr === num) {
      return true;
    } else {
      curr += 1;
    }
  }
  return false;
};
