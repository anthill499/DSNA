const minimumDeletions = (s) => {
  let currA = 0;
  let currB = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      currB += 1;
      // increment B by 1
    } else if (s[i] === "b") {
      currB = Math.min(currA, currB);
      currA += 1;
    }
  }
  return Math.min(currA, currB);
};

// "aababbab"
console.log(minimumDeletions("aababbab"));
console.log(minimumDeletions("bbaaaabb"));
