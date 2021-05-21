function solution(x, n) {
  let arr = [];
  let element = x;
  for (let i = 0; i < n; i++) {
    arr.push(element);
    element += x;
  }
  return arr;
}
