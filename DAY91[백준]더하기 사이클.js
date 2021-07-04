//!#1
// 0 >= x && x <= 99
// if x < 10 : x0
// x + 0 -> x의 일의 자리 + 합계의 일의 자리

/*
    ex) x = 26
    2 + 6 = 8 -> 68 
    6 + 8 = 14 -> 84 
    8 + 4 = 12 -> 42
    4 + 2 =  6 -> 26
    
    =>> 4번
    
    ex) x = 1; -> x = 10;
    1 + 0 = 1 -> 11
    1 + 1 = 2 -> 12
    ..??
*/

let input = require("fs").readFileSync("/dev/stdin").toString();
let cnt = 1;
let origin = Number(input);
if (input < 10) input + "0";

while (1) {
  let target = input;
  let targetArr = target.split("");

  let newTarget = Number(targetArr[0]) + Number(targetArr[1]);
  let newTargetLen = String(newTarget).length;

  let realNewTarget = targetArr[1] + String(newTarget)[newTargetLen - 1];

  if (origin == realNewTarget) break;
  else {
    input = realNewTarget;
    cnt++;
  }
}

console.log(cnt);

// #2
let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let num = input;
let sum;
let i = 0;

while (true) {
  i++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) break;
}

console.log(i);
