const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let items = line.split(" ");
  let first = items[0];
  let second = items[1];
  console.log(parseInt(first) + parseInt(second));

  rl.close();
}).on("close", function () {
  process.exit();
});
