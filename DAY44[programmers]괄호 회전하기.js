function solution(s) {
  let ans = 0;
  let pass = true;
  s = s.split("");
  let n = s.length;
  let obj = { "(": ")", "[": "]", "{": "}" };
  console.log(obj);

  let last = s.slice(-1)[0];
  while (n > 0) {
    if (s[0] === "]" || s[0] === "}" || s[0] === ")") pass = false;
    // else if (s.indexOf(obj[s[0]]) === -1 ) pass = false;
    // else if ((s[1] === ']' || s[1] === '}' || s[1] === ')')) ans += 0;

    let move = s.shift();
    s.push(move);

    // console.log(s[0], last, s[0] === last)
    if (s[0] === last) break;
  }
  return ans;
}
