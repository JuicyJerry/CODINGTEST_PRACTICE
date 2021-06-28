const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const input = line.split(" ");
  const x = parseInt(input[0]);
  const y = parseInt(input[1]);
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(Math.floor(x / y));
  console.log(x % y);
  rl.close();
}).on("close", function () {
  process.exit();
});
