function solution(n) {
  const answer = new Array(n).fill().map((_, i) => new Array(i + 1));
  console.log(answer);
  let cnt = 0;
  let y = 0;
  let x = -1;

  while (n > 0) {
    for (let i = 0; i < n; i++) answer[++x][y] = ++cnt;
    for (let i = 0; i < n - 1; i++) answer[x][++y] = ++cnt;
    for (let i = 0; i < n - 2; i++) answer[--x][--y] = ++cnt;

    n -= 3;
  }
  console.log(answer);
  console.log(answer.flatMap((e) => [e]));
  return answer.flatMap((e) => e);
}
