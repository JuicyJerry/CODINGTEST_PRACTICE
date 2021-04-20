var heightChecker = function (heights) {
  let notSort = heights.slice(0, heights.length);
  heights.sort(function (a, b) {
    return a - b;
  });
  let cnt = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != notSort[i]) cnt++;
  }
  return cnt;
};
