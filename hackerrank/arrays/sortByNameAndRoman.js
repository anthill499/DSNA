// Given an array of names starting with an actual name and then followed by roman number
// Sort the list by names and then sort by roman numerals
import romanToInt from "../../leetcode/strings/romanToInteger";

const sortTheList = (arr) => {
  const splitUp = arr.map((ele) => ele.split(" "));
  const sortedByNames = splitUp.sort((a, b) => {
    if (a[0] < b[0]) {
      return 1;
    } else if (a[0] > b[0]) {
      return -1;
    } else {
      return 0;
    }
  });
  const sortedByRomansNow = sortedByNames.map((a, b) => {
    if (romanToInt(a[1]) < romanToInt(b[1])) {
      return 1;
    } else if (romanToInt(a[1]) > romanToInt(b[1])) {
      return -1;
    } else {
      return 0;
    }
  });
  return sortedByRomansNow.map((ele) => ele.join(" "));
};

export default sortTheList;
