const input = Number(require("fs").readFileSync("/dev/stdin").toString());
let answer = "";

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    if (j >= input - i - 1) answer += "*";
    else answer += " ";
  }
  answer += "\n";
}
console.log(answer);
