const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  for (let i = 1; i <= 9; i++) {
    console.log(line + " * " + i + " = " + line * i);
  }

  rl.close();
}).on("close", function () {
  process.exit();
});
