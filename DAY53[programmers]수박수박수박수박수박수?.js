function solution(n) {
  let i = 0;
  let ans = "";
  while (i !== n) {
    if (i % 2 === 0) ans += "수";
    else ans += "박";
    i++;
  }
  return ans;
}
