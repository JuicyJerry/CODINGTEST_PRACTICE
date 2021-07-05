/*
  새로운 배열은 1과 0으로 이뤄진다. 
  if : 'O'인 요소일 경우에 다음 요소도 동일하다면 1 대신 이전 값의 +1를 해준다.
  이 값의 모든 요소의 합계를 반환한다.
*/

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let len = Number(input[0]);
//    let answer = '';

for (let y = 1; y <= len; y++) {
  let ret = [];

  for (let x = 0; x < input[y].length; x++) {
    if (input[y][x] === "O") {
      if (input[y][x - 1] === "O") {
        ret[x] = ret[x - 1] + 1;
      } else {
        ret[x] = 1;
      }
    } else {
      ret[x] = 0;
    }
  }

  let sum = 0;
  for (let i = 0; i < ret.length; i++) {
    sum += ret[i];
  }
  console.log(sum);
  //    answer += sum + '\n';
}

//    console.log(answer);
