const rand2 = () => {
  return Math.random() > 0.5 ? 1 : 0;
};

// Supposed we have a function that a function rand2
// How do we make a function rand3 give fair chances to three people?

// 0 0 25%
// 1 0 50%
// 0 1
// 1 1 25%

// 1 0 0 = fair
// 0 0 1 = fair
const rand3 = () => {
  const store = [rand2(), rand2(), rand2()];
  const sum = store.reduce((acc, next) => {
    return acc + next;
  }, 0);
  if (sum === 1) {
    return store.indexOf(1);
  } else {
    return rand3();
  }
};

const newArr = [...new Array(1000)].map((_) => rand3());
console.log(newArr.filter((ele) => ele === 0).length);
console.log(newArr.filter((ele) => ele === 1).length);
console.log(newArr.filter((ele) => ele === 2).length);
