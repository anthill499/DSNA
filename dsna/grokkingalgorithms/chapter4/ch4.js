const recArrSum = (arr) => {
  return arr.length === 0 ? 0 : arr[0] + recArrSum(arr.splice(1, arr.length));
};

// console.log(recArrSum([1, 2, 3, 4]));

// Write a recursive function to count the number of items in a list.
const countListItems = (list) => {
  if (list.length === 0) {
    return 0;
  }
  return 1 + countListItems(list.splice(1, list.length));
};

// console.log(countListItems([1, 2, 3, 4]));

const findMaxNumber = (list) => {
  if (list.length === 0) return "No numbers in this list";
  if (list.length === 1) return list[0]; // base case
  const memo = findMaxNumber(list.splice(1, list.length)); // memo, inductive step
  return list[0] > memo ? list[0] : memo;
};

// console.log(findMaxNumber([-1, -2, -3, -4, -2, -10, 1]));

// Binary Search
// [-1, -2, -3, -4, -2, -10]
const binarySearch = (arr, target) => {
  if (arr.length === 0) return "can't find number"; // base case
  const midpoint = Math.floor(arr.length / 2);
  // inductive step
  if (arr[midpoint] === target) {
    return midpoint;
  } else if (arr[midpoint] > target) {
    return binarySearch(arr.splice(0, midpoint), target);
  } else {
    return (
      1 + midpoint + binarySearch(arr.splice(midpoint + 1, arr.length), target)
    );
  }
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));
// console.log(binarySearch([], -3));

// Quicksort
const quickSort = (arr) => {
  // O(N)
  if (arr.length === 0) return []; // Want to be able to destructure arrays in return statements
  // as we pop off the call stack
  const pivot = arr.shift(); // O(N) TS
  return [
    ...quickSort(arr.filter((ele) => ele <= pivot)), // O(N) TS
    pivot,
    ...quickSort(arr.filter((num) => num > pivot)), // O(N) TS
  ];
};
// const startTime = performance.now();
// console.log(quickSort([19, 2, -3, 14, -5, 6, 7, -8, 2]));
// const endTime = performance.now();
// console.log(endTime - startTime);
