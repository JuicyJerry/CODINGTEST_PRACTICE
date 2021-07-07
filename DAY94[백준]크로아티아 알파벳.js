//! #1
let input = require("fs").readFileSync("/dev/stdin").toString();
let croatic = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let croaticArr = [];
let flag, target;

for (let y = 0; y < input.length; y++) {
  if (flag === 1 || target === undefined) {
    target = input[y];
  } else {
    if (target.length >= 2) {
      croaticArr.push(target[0]);
      y -= 3;
      target = "";
      continue;
    } else {
      target += input[y];
    }
  }

  flag = 0;
  if (croatic.indexOf(target) > -1) {
    croaticArr.push("*");
    flag = 1;
  }
}

console.log(croaticArr.length);
