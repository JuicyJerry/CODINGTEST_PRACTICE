const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  //    console.log(line);
  const input = line.split(" ").map((el) => parseInt(el));
  const [A, B, C] = input;
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);

  rl.close();
}).on("close", function () {
  process.exit();
});
