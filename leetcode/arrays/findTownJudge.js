const findNumber = (array, number) => {
  for (let k = 0; k < array.length; k++) {
    if (array[k] == number) return true;
  }
  return false;
};

var findJudge = function (n, trust) {
  const townPeople = {}; // Who they trust?
  for (let i = 1; i <= n; i++) {
    townPeople[i] = [];
  }
  for (let trustees of trust) {
    townPeople[trustees[0]].push(trustees[1]);
  }
  // Find the person who doesnt trust anyone
  const potentialJudge = Object.entries(townPeople).filter(
    (entry) => entry[1].length === 0
  );
  if (potentialJudge.length === 0) return -1; // because atleast one person trusts someone
  delete townPeople[potentialJudge[0][0]];
  const people = Object.values(townPeople);
  for (let j = 0; j < people.length; j++) {
    console.log(
      potentialJudge[0][0],
      people[j],
      findNumber(people[j], potentialJudge[0][0])
    );
    if (!findNumber(people[j], potentialJudge[0][0])) return -1;
  }
  return potentialJudge[0][0];
};
