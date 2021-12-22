// Given an integer h (hour) between 0 and 11
// and m (minutes) between 0 and 59
// Write an algorithm determining the angle between the two hands on the clock

const findHour = (h, m) => {
  const minAngle = m * 6;
  const hrAngle = h * 30 + m * 0.5;
  const diff = Math.abs(hrAngle - minAngle);
  return Math.min(360 - diff, diff);
};

console.log(findHour(1, 30));
console.log(findHour(2, 30));
console.log(findHour(11, 30));
