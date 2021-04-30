function solution(answers) {
  let ans = new Array(3).fill(0);
  let list = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === list[0][i % 5]) ans[0]++;
  }
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === list[1][i % 8]) ans[1]++;
  }
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === list[2][i % 10]) ans[2]++;
  }

  let max = Math.max(...ans);
  let ret = [];
  for (let el in ans) {
    if (ans[el] === max) ret.push(parseInt(el) + 1);
  }
  return ret;
}
