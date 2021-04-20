var validMountainArray = function (arr) {
  let index = 0;

  while (arr[index] < arr[index + 1]) {
    index++;
  }

  if (index === arr.length - 1 || index === 0) {
    return false;
  }

  while (arr[index] > arr[index + 1]) {
    index++;
  }

  return index === arr.length - 1 && arr.length >= 3;
};
