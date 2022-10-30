function subarraySort(array) {
  // 2 pointers, min and max approach
  let pA = 0;
  let pB = array.length - 1;
  const indices = {};

  while (pA <= pB) {
    if (pA === pB) return [-1, -1]; // return if inputArr is sorted
    if (array[pA + 1] >= array[pA]) {
      pA++;
      continue;
    } else {
      if (!indices["first"]) {
        indices["first"] = pA;
      }
    }
    if (array[pB - 1] <= array[pB]) {
      pB--;
    } else {
      indices["last"] = pB;
      break;
    }
  }
  let [min, max] = [array[indices["first"]], array[indices["last"]]];
  for (let i = indices["first"]; i <= indices["last"]; i++) {
    min = Math.min(min, array[i]);
    max = Math.max(max, array[i]);
  }
  let resultStartIdx;
  let resultEndIdx;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > min) {
      resultStartIdx = i;
      break;
    }
  }
  for (let j = array.length - 1; j >= 0; j--) {
    if (array[j] < max) {
      resultEndIdx = j;
      break;
    }
  }

  return [resultStartIdx, resultEndIdx];
}
