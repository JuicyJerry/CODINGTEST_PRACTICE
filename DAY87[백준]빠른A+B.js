//#1
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let num = parseInt(input.shift());
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(input[i].split(" "));
  }

  for (let i = 0; i < num; i++) {
    console.log(parseInt(arr[i][0]) + parseInt(arr[i][1]));
  }

  process.exit();
});

//#2
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let answer = "";
let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  answer +=
    Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]) + "\n";
}

console.log(answer);
