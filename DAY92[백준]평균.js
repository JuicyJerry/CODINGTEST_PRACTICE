/*
  모든 점수를 숫자형으로 바꾼다.
  점수 중 최댓값을 찾는다.
  최댓값으로 각 요소를 나눠주고 * 100을 해준다.
  모든 결괏값 요소를 더한다.
  합계를 과목의 갯수로 나눠준다.
*/

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let len = Number(input[0]);
let nums = input[1].split(" ").map((el) => Number(el));
let max = nums[0];
let sum = 0;

for (let i = 1; i < len; i++) {
  if (max < nums[i]) max = nums[i];
}

for (let i = 0; i < len; i++) {
  nums[i] = (nums[i] / max) * 100;
}

for (let i = 0; i < len; i++) {
  sum += nums[i];
}

console.log(sum / len);
