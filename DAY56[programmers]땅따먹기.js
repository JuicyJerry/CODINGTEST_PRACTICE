//! #1
function solution(land) {
  let ans = 0;
  let sum = 0;
  let max, maxIdx, prevIdx;
  let copyRowLand = [];

  for (let y = 0; y < land.length; y++) {
    max = Math.max.apply(null, land[y]);
    maxIdx = land[y].indexOf(max);

    if (maxIdx === prevIdx) {
      copyRowLand = land[y];
      copyRowLand.splice(maxIdx, 1);

      max = Math.max.apply(null, copyRowLand);
      maxIdx = copyRowLand.indexOf(max);
      prevIdx = maxIdx;
    } else prevIdx = maxIdx;

    sum += max;
  }

  return sum;
}

//! #2
function solution(land) {
  let sum = 0;

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (i === 0) continue;

      let arr = land[i - 1].slice();
      arr[j] = 0;
      land[i][j] += Math.max.apply(null, arr);
      sum = Math.max(land[i][j], sum);
    }
  }

  return sum;
}
