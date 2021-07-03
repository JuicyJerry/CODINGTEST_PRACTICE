let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let i = 0;
let answer = "";

while (1) {
  let num1 = Number(input[i].split(" ")[0]);
  let num2 = Number(input[i].split(" ")[1]);

  if (num1 + num2 === 0) break;
  else {
    answer += num1 + num2 + "\n";
    i++;
  }
}
console.log(answer);
