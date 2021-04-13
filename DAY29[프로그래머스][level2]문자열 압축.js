function solution(s) {
  let answer = 0;
  let cnt = 0;
  let result = s;
  let type = 1;
  let i = 0;

  while (s.length) {
    if (i === s.length) break;
    let t = s.slice(0, type);

    for (let i = 0; i < s.length; i += type) {
      if (s[i] === t) {
        cnt++;
      }
      result = cnt + s[i];
      t = s.slice(i, type);
      cnt = 0;
    }
    type++;
    i++;
  }
  return answer;
}
