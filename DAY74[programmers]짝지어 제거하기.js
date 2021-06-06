function solution(s) {
  let arr = [];
  let idx = 0;

  for (let i = 0; i < s.length; i++) {
    arr.push(s[idx]);
    idx++;

    if (arr.length >= 2 && arr[arr.length - 1] === arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
    }
  }
  if (arr.length === 0) return 1;
  return 0;
}
