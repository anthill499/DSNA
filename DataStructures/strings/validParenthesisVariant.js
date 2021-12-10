const variableOne = "const hello = () => {}"; // true
const variableTwo = "function hi() { return hi; }"; // true
const variableThree = "function hi( { return hi; }"; // false

const checkValidParenthesis = (string) => {
  const brackets = {
    //  TC O1 SC O1
    "{": "}",
    "(": ")",
    "[": "]",
  };
  const values = Object.values(brackets); // TC O1 SC O1
  const stack = []; // TC O1 SC O1
  for (let i = 0; i < string.length; i++) {
    // TC O(N) SC O(N)
    if (brackets[string[i]]) {
      stack.push(string[i]);
    } else {
      if (string[i] === brackets[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        if (values.includes(string[i])) stack.push(string[i]); // TC O(1)
      }
    }
  }
  return !stack.length; // TC O(1) SC O(1);
};
console.log(checkValidParenthesis(variableOne));
console.log(checkValidParenthesis(variableTwo));
console.log(checkValidParenthesis(variableThree));
// TC O(N) SC O(N);
