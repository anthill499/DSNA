var findDuplicate = function (nums) {
  let tortoise = 0;
  let hare = 0;
  while (true) {
    console.log(tortoise, hare, "into");
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    console.log(tortoise, hare);
    if (tortoise === hare) break;
  }
  let tortoise2 = 0;
  console.log("STOP");
  while (true) {
    console.log(tortoise, tortoise2, "into");
    tortoise = nums[tortoise];
    tortoise2 = nums[tortoise2];
    console.log(tortoise, tortoise2);
    if (tortoise == tortoise2) return tortoise;
  }
};
