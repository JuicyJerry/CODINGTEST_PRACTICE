//! #1
function solution(p, c) {
  p = p.sort();
  c = c.sort();
  let idx = 0;

  while (1) {
    if (p[idx] !== c[idx]) return p[idx];
    idx++;
  }
}
