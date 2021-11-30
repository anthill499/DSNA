var searchMatrix = function (matrix, target) {
  if (!matrix) return false;
  const mid = Math.floor(matrix.length / 2);
  const last = matrix[mid].length - 1;
  let isFound = false;
  if (matrix[mid][0] > target) {
    const memo = matrix.slice(0, mid);
    if (memo.length === 0) return false;
    isFound = searchMatrix(memo, target) === true ? true : false;
  } else if (matrix[mid][last] < target) {
    const memo = matrix.slice(mid + 1);
    if (memo.length === 0) return false;
    isFound = searchMatrix(memo, target) === true ? true : false;
  } else if ((target) => matrix[mid][0] && target <= matrix[mid][last]) {
    for (let val of matrix[mid]) {
      if (val === target) return true;
    }
  }
  return isFound;
};
