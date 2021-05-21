function solution(n) {
  let idx = 1;
  while (idx <= n) {
    if (idx ** 2 === n) return (idx + 1) * (idx + 1);
    idx++;
  }
  return -1;
}
