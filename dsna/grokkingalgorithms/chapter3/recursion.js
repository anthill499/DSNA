// Recursive factorial
const recursiveFactorial = (n) => {
  return n === 1 ? 1 : n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(5));
