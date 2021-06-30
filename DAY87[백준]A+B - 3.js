const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let time = parseInt(input.shift());
  let times = [];

  for (let i = 0; i < time; i++) {
    let target = input[i].split(" ");
    times.push(target);
  }

  for (let i = 0; i < time; i++) {
    console.log(parseInt(times[i][0]) + parseInt(times[i][1]));
  }
  process.exit();
});
