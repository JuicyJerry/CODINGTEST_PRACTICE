var replaceElements = function (arr) {
  if (arr.length === 1) return [-1];
  let n = arr.length;
  let idx = 0;
  let max = 0;

  while (idx <= n) {
    for (let i = idx + 1; i < arr.length; i++) {
      if (max <= arr[i]) {
        max = arr[i];
      }
    }

    arr[idx] = max;
    max = 0;
    idx++;

    if (idx === n - 1) {
      arr[n - 1] = -1;
      break;
    }
  }
  return arr;
};
