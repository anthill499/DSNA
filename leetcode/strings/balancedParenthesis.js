// Track information using a Stack
// If match, pop off the stack
// Stack should be empty at the end

const isValid = function (s) {
  const stack = [];
  const tokens = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  // if Key into tokens with backwards brace, will get undefined/null
  for (let i = 0; i < s.length; i++) {
    if (tokens[s[i]]) {
      stack.push(s[i]);
    } else {
      if (tokens[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.length === 0 ? true : false;
};

console.log(isValid("[]"));
console.log(isValid("[]["));
