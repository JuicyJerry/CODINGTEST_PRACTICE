const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let input = line.split(" ").map((el) => parseInt(el));
  let [n1, n2] = input;

  if (n1 > n2) console.log(">");
  else if (n1 < n2) console.log("<");
  else console.log("==");

  rl.close();
}).on("close", function () {
  process.exit();
});
