var findDisappearedNumbers = function (nums) {
  let ret = [];
  let n = nums.length;
  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 1; i <= n; i++) {
    if (nums.indexOf(i) === -1) {
      ret.push(i);
    }
  }
  return ret;
};
