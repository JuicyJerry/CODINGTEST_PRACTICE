//!#1
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let len = input.shift();
let cnt = 0;

for (let y = 0; y < input.length; y++) {
  let target = input[y].split("");
  let arr = [];
  let flag = 0;

  for (let x = 0; x < input[y].length; x++) {
    if (arr.indexOf(target[x]) === -1 || target[x] === target[x - 1]) {
      if (target[x] === target[x - 1]) continue;
      arr.push(target[x]);
    } else {
      flag = 1;
      break;
    }
  }
  if (flag === 0) cnt++;
}

console.log(cnt);
