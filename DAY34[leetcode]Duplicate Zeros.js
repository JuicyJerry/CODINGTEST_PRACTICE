var duplicateZeros = function (arr) {
  let ret = [];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      ret.push(0);
      ret.push(0);
    } else {
      ret.push(arr[i]);
    }
    arr[i] = ret[idx++];
  }
};
