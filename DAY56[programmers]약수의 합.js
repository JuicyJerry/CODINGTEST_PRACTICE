function solution(n) {
  let ans = 0;
  let idx = 1;
  while (idx !== n + 1) {
    if (n % idx === 0) ans += idx;
    idx++;
  }
  return ans;
}
