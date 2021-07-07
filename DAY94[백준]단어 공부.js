//!#1
let input = require("fs").readFileSync("/dev/stdin").toString().split("");
let obj = {};

for (let i = 0; i < input.length; i++) {
  if (obj[input[i].toUpperCase()]) obj[input[i].toUpperCase()]++;
  else obj[input[i].toUpperCase()] = 1;
}

let objValues = Object.values(obj);
let max = Math.max(...objValues);
let cnt = 0;
let maxIdx = 0;

for (let i = 0; i < objValues.length; i++) {
  if (max === objValues[i]) {
    cnt++;
    maxIdx = i;
  }
}

if (cnt > 1) console.log("?");
else console.log(input[maxIdx].toUpperCase());

//!#2
