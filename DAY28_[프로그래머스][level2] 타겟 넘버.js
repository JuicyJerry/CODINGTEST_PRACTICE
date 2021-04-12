function solution(numbers, target) {
  let answer = 0;
  // let cnt = 0;

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= -1;
    let t = getSum(numbers);
    if (t === target) answer++;
    numbers[i] *= -1;
  }

  return answer;
}

function getSum(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum;
}
