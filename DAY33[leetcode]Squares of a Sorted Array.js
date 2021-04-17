// #1
var sortedSquares = function (nums) {
  return nums.map((t) => Math.pow(t, 2)).sort((a, b) => a - b);
};

// #2
var sortedSquares = function (nums) {
  // return nums.map((t) => Math.pow(t, 2)).sort((a,b) => a - b);

  let n = nums.length;
  let result = new Array(n);
  let left = 0;
  let right = n - 1;

  for (let i = n - 1; i >= 0; i--) {
    let square;
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = nums[right];
      right--;
    } else {
      square = nums[left];
      left++;
    }
    result[i] = square * square;
  }
  return result;
};
