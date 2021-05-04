function solution(arr, divisor) {
  let target = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
  return !target.length ? [-1] : target;
}
