// Given an integer h (hour) between 0 and 11
// and m (minutes) between 0 and 59
// Write an algorithm determining the angle between the two hands on the clock

const findHour = (h, m) => {
  const minAngle = m * 6; // we want to convert the minute hand to degrees
  const hrAngle = h * 30 + m * 0.5;
  // h * 30 because we want to covert the hour hand to degrees
  // m * 0.5 because 30 deg per hour hand
  // hrAngle = (30 x h) + (30 x m/60) second part is a percentage through the hour

  const diff = Math.abs(hrAngle - minAngle);
  // Abs value to consider the hours that are past 6 like 6:30
  return Math.min(360 - diff, diff);
};

console.log(findHour(1, 30));
console.log(findHour(2, 30));
console.log(findHour(11, 30));
