let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    cnt++;
  }
}
console.log(cnt);
