/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let i = 0;
  let profit = 0;
  let start;
  let stop;
  while (i < prices.length) {
    start = prices[i];
    let possible = false;
    let j = i + 1;

    while (start < prices[j]) {
      stop = prices[j];
      possible = true;
      j++;
      if (stop > prices[j]) break;
    }

    if (possible) {
      profit += stop - start;

      if (j === prices.length) break;
      i = j;
    } else {
      i++;
    }
  }
  return profit;
};
