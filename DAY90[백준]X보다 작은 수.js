const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let num = Number(input[0].split(" ")[0]);
let target = Number(input[0].split(" ")[1]);
let targetArr = input[1].split(" ");

for (let i = 0; i < num; i++) {
  if (Number(targetArr[i]) < target) console.log(Number(targetArr[i]));
}
