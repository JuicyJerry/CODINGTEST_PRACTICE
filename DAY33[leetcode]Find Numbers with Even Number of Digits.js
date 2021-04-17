var findNumbers = function (nums) {
  let ans = 0;

  for (let i of nums) {
    console.log(String(i).length);
    if (String(i).length % 2 === 0) ans++;
  }
  return ans;
};
