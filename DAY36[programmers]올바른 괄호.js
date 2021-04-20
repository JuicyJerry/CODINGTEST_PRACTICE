function solution(s) {
  if (s[0] === ")" || s.length % 2 !== 0) return false;

  let l = 0;
  let r = 0;
  let i = 0;

  while (i < s.length) {
    if (s[i] === "(" && r >= 1) r--;
    else if (s[i] === ")" && l >= 1) l--;
    else if (s[i] === "(") l++;
    // else if (s[i] === ')') r++;

    i++;
  }

  if (l === 0 && r === 0) return true;
  return false;
}
