// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  const leng = arr.length;
  const hash = {};
  arr.forEach((n) => {
    if (n < 0) {
      hash["negative"] = hash["negative"] ? hash["negative"] + 1 : 1;
    } else if (n > 0) {
      hash["positive"] = hash["positive"] ? hash["positive"] + 1 : 1;
    } else {
      hash["zero"] = hash["zero"] ? hash["zero"] + 1 : 1;
    }
  });
  console.log((hash["positive"] / leng).toFixed(6));
  console.log((hash["negative"] / leng).toFixed(6));
  console.log((hash["zero"] / leng).toFixed(6));
}
