function solution(n) {
  n = Array.from(n.toString()).sort().reverse().join("");
  return parseInt(n);
}
