const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let num = input[0];

for (let i = 1; i <= num; i++) {
  let num1 = Number(input[i].split(" ")[0]);
  let num2 = Number(input[i].split(" ")[1]);

  console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}
