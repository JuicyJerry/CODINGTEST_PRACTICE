const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let clock = line.split(" ").map((el) => parseInt(el));
  let hour = clock[0];
  let minute = clock[1];

  // #1
  minute -= 45;

  if (minute < 0) {
    minute += 60;
    hour--;

    if (hour === -1) {
      hour = 23;
    }
  }
  console.log(hour + " " + minute);

  // #2
  if (minute < 45) {
    if (hour === 0) {
      hour = 23;
      minute = 60 - (45 - minute);
    } else {
      hour -= 1;
      minute = 60 - (45 - minute);
    }
  }
  console.log(hour + " " + minute);
  rl.close();
}).on("close", function () {
  process.exit();
});
