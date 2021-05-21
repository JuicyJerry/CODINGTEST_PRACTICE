function solution(n, m) {
  let t;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      t = i;
    }
  }
  let q = (n * m) / t;
  return [t, q];
}
