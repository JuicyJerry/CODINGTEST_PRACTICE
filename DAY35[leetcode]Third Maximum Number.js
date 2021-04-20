var thirdMax = function (nums) {
  let cnt = 0;
  let ret = 0;
  let n = nums.length - 1;

  nums.sort(function (a, b) {
    return a - b;
  });

  if (nums.length < 3) {
    return Math.max(...nums);
  }

  for (let i = n; i >= 0; i--) {
    if (nums[i] != nums[i - 1]) cnt += 1;
    if (i === 0 && cnt != 3) {
      return Math.max(...nums);
    }
    if (cnt === 3) return nums[i];
  }
  return 0;
};
