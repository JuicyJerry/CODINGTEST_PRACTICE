// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((el) => Number(el));
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .reduce((acc, cur) => acc * Number(cur), 1);
let result = String(input)
  .split("")
  .map((el) => Number(el));
let numsObj = {};

for (let i = 0; i < result.length; i++) {
  numsObj[result[i]] = numsObj[result[i]] ? (numsObj[result[i]] += 1) : 1;
}

for (let i = 0; i < 10; i++) {
  if (numsObj[i]) {
    console.log(numsObj[i]);
  } else {
    console.log(0);
  }
}
