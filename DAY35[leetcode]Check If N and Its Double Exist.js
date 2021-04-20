var checkIfExist = function (arr) {
  for (let left = 0; left < arr.length; left++) {
    for (let right = arr.length - 1; right >= 0; right--) {
      if (left === right) continue;

      if (arr[left] === 2 * arr[right] || arr[left] === arr[right] / 2) {
        return true;
      }
    }
  }

  return false;
};
