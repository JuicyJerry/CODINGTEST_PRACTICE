//#1
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

rl.on("line", function (line) {
  line = Number(line);

  for (let i = line; i >= 1; i--) {
    console.log(i);
  }
  rl.close();
}).on("close", function () {
  process.exit();
});

//#2
let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = input; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);
