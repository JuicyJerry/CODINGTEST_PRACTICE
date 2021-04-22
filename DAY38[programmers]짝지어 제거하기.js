// #1
function solution(s) {
  let answer = 0;
  let n = s.length - 1;
  let i = 1;
  let split = s.split("");

  while (i <= n) {
    if (split.length <= 1) return (answer = 1);
    if (split[i] === split[i - 1]) {
      split.slice(i - 1, i + 1);
      i = 1;
    } else {
      i++;
    }
  }

  if (split.length > 0) return answer;
}

// #2
function solution(s) {
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    if (temp.length == 0 || temp[temp.length - 1] !== s[i]) {
      temp.push(s[i]);
    } else if (temp[temp.length - 1] == s[i]) {
      temp.pop();
    }
  }
  return temp.length > 0 ? 0 : 1;
}
