function solution(array, commands) {
  let ans = [];
  let idx = 0;

  while (ans.length !== commands.length) {
    let input = array.slice(commands[idx][0] - 1, commands[idx][1]);
    input.sort((a, b) => a - b);
    ans.push(input[commands[idx][2] - 1]);
    idx++;
  }
  return ans;
}
