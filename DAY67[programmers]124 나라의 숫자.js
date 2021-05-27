function solution(n) {
  let ans = "";
  let head = 0;

  while (n > 0) {
    head = n % 3;
    n = Math.floor(n / 3);

    if (head === 0) {
      n -= 1;
      head = 4;
    }
    ans = head + ans;
  }
  return ans;
}
