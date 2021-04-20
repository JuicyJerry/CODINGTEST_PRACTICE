var moveZeroes = function (nums) {
  let idx = 0;
  let n = nums.length - 1;

  while (idx <= n) {
    if (nums[idx] === 0) {
      let z = nums.splice(idx, 1);
      nums.push(z);
      idx = 0;
    } else {
      idx++;
    }
  }

  return nums;
};
