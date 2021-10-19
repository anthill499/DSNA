console.log("chapter 1 arrays and strings questions");
console.log("---------------------------------------");

//  Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures
// O(n)
const isUnique = (string) => {
  const arr = string.split(""); // O(n) space
  const store = {};
  arr.forEach((ele) => {
    if (store[ele]) {
      store[ele] += 1;
    } else {
      store[ele] = 1;
    }
  });
  for (const val of Object.values(store)) {
    if (val > 1) return false;
  }
  return true;
};

// Given two strings, write a method to decide if one is a permutation of the other.
// O(n)
const checkPermutation = (str1, str2) => {
  const storeOne = {};
  for (let i = 0; i < str1.length; i++) {
    if (storeOne[str1[i]]) {
      storeOne[str1[i]] += 1;
    } else {
      storeOne[str1[i]] = 1;
    }
  }
  for (let j = 0; j < str2.length; j++) {
    storeOne[str2[j]] -= 1;
  }
  return Object.values(storeOne).every((num) => num === 0);
};

// console.log(checkPermutation("basjet", "basket"));
// console.log(checkPermutation("basket1", "basket1"));

// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string.
