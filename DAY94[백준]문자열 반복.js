//! #1
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let firstElement = input[1].split(" ");
let secondElement = input[2].split(" ");
let answer = "";

for (let i = 0; i < Number(firstElement[1].length); i++) {
  for (let j = 0; j < Number(firstElement[0]); j++) {
    answer += firstElement[1][i];
  }
}

answer += "\n";

for (let i = 0; i < Number(secondElement[1].length); i++) {
  for (let j = 0; j < Number(secondElement[0]); j++) {
    answer += secondElement[1][i];
  }
}

console.log(answer);

//!#2
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let len = input.shift();

for (let t = 0; t < len; t++) {
  let [time, str] = input[t].split(" ");
  let answer = "";

  for (let y = 0; y < str.length; y++) {
    for (let x = 0; x < time; x++) {
      answer += str[y];
    }
  }
  console.log(answer);
}
