let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => Number(el));
let max = -99;

for (let i = 0; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i + 1;
  }
}

console.log(max, maxIdx);
