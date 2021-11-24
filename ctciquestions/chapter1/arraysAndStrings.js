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

// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string.
// "Mr John Smith " => "Mr%20John%20Smith"

const URLify = (string) => {
  const splitArr = string.split(" "); // O(n) space
  const newArr = splitArr.filter((ele) => ele !== ""); //  O(n) space
  return newArr.join("%20");
};

// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.

const palindromePermutation = (string) => {
  const str = string.split(" ").join("").toLowerCase(); // creates lowercase string without spaces
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    const val = str[i];
    hash[val] = hash[val] ? hash[val] + 1 : 1;
  }
  return Object.values(hash).every((ele) => ele % 2 === 0);
};

// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.

const oneAway = (str, str2) => {
  const hashOne = {};
  const hashTwo = {};
  str.split("").forEach((el) => {
    hashOne[el] = hashOne[el] ? hashOne[el] + 1 : 1;
  });
  str2.split("").forEach((el2) => {
    hashTwo[el2] = hashTwo[el2] ? hashTwo[el2] + 1 : 1;
  });

  return (
    Math.abs(Object.values(hashOne).length - Object.values(hashTwo).length) ===
    1
  );
};

// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).
const stringCompression = (string) => {};

console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("aaaaaa"));
console.log(stringCompression("a"));
