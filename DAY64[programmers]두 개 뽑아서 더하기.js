function solution(numbers) {
  let answer = [];

  for (let y = 0; y < numbers.length; y++) {
    for (let x = y + 1; x < numbers.length; x++) {
      if (y !== x) answer.push(numbers[y] + numbers[x]);
    }
  }
  const ret = [...new Set(answer)];
  return ret.sort((a, b) => a - b);
}
