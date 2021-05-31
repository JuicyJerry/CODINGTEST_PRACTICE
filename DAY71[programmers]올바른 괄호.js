function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[0] === ")") return false;
    if (s[i] === "(") arr.push(s[i]);
    else if (s[i] === ")") arr.pop();
  }
  if (arr.length > 0) return false;
  return true;
}
