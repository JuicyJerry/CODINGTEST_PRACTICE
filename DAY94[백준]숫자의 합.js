let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let sum = input[1].split("").reduce((acc, cur) => acc + Number(cur), 0);

console.log(sum);
