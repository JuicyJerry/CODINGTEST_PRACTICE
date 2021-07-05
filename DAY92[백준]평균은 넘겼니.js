/*
   각 줄의 평균 점수를 구한다.
   각 줄에서 평균을 넘는 학생 수를 구하여 비율을 구한다.
*/

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let inputLen = Number(input[0]);

for (let i = 1; i <= inputLen; i++) {
  let classes = input[i].split(" ");
  let classesLen = Number(classes[0]);
  let sum = 0;

  for (let j = 1; j <= classesLen; j++) {
    sum += Number(classes[j]);
  }

  let classesAvg = sum / classesLen;
  let cnt = 0;
  for (let t = 1; t <= classesLen; t++) {
    if (classes[t] > classesAvg) cnt++;
  }

  console.log(((cnt / classesLen) * 100).toFixed(3) + "%");
}
