//! #1
function solution(arr) {
  let ret = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== arr[i - 1]) ret.unshift(arr[i]);
  }
  return ret;
}

//! #2
function solution(arr) {
  let ret = [];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] !== arr[i - 1]) ret.push(arr[i - 1]);
  }
  return ret;
}
