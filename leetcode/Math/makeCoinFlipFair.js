const rand2 = () => {
  return Math.random() > 0.5 ? 1 : 0;
};

// Supposed we have a function that a function rand2
// How do we make rand3 give fair chances to three people?

const rand3 = () => {
  const store = [rand2(), rand2(), rand()];
  const sum = store.reduce((acc, next) => {
    return acc + next;
  }, 0);
  if (sum === 1) {
    return store.indexOf(1);
  } else {
    return rand3();
  }
};
