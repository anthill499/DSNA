const romanToInt = (s) => {
  let result = 0;
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const specialCases = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  for (let i = 0; i < s.length; i++) {
    const group = s[i] + s[i + 1];
    if (specialCases[group]) {
      result += specialCases[group];
      i++;
    } else {
      result += dictionary[s[i]];
    }
  }
  return result;
};

export default romanToInt;
