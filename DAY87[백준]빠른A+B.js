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
