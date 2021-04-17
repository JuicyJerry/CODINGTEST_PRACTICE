var findMaxConsecutiveOnes = function (nums) {
  let cnt = 0;
  let big = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] === 1 ? cnt++ : (cnt = 0);
    if (big <= cnt) big = cnt;
  }
  return big;
};
