// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  const leng = arr.length;
  const hash = {};
  hash["negative"] = 0;
  hash["positive"] = 0;
  hash["zero"] = 0;
  hash["negative"];
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

function plusMinusSpaceEfficient(numbers) {
  let positives = 0;
  let negatives = 0;
  let zeroes = 0;
  for (const num of numbers) {
    if (num < 0) {
      negatives++;
    } else if (num > 0) {
      positives++;
    } else {
      zeroes++;
    }
  }
  const total = positives + negatives + zeroes;
  console.log(positives / total);
  console.log(negatives / total);
  console.log(zeroes / total);
}

console.log(plusMinusSpaceEfficient([1, 2, -3, -4, 0, 1, 3]));
