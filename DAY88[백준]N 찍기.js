const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  for (let i = 0; i < line; i++) {
    console.log(i + 1);
    console.log("\n");
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
