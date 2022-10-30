const findMinimumNumber = (array, number) => {
  const limit = array.length - number; // You have to go to the next recursive call after hitting limit;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // D1: r1-5, D2: 6,7 D3: 8 D4: 9 D5: 10
let target = 5;

console.log(findMinimumNumber(arr, target)); // Eval to 15

console.log(arr.reduce((a, c) => a + c));
