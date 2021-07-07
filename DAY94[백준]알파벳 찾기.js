let input = require("fs").readFileSync("/dev/stdin").toString();
for (let i = 97; i <= 122; i++) {
  let str = String.fromCharCode(i);
  console.log(Number(input.indexOf(str) + " "));
}
