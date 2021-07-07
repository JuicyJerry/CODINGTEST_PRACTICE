//!#1
let input = require("fs").readFileSync("/dev/stdin").toString();
let dial = {
  0: "",
  1: "ABC",
  2: "DEF",
  3: "GHI",
  4: "JHL",
  5: "MNO",
  6: "PQRS",
  7: "TUV",
  8: "WXYZ",
  9: "",
};

let sum = 0;
let dialTime = Object.keys(dial);
let dialStr = Object.values(dial);

for (let i = 0; i < input.length; i++) {
  let target;
  for (let j = 0; j < dialTime.length; j++) {
    target = dialStr[j].indexOf(input[i]);
    if (target > -1) {
      target = j;
      break;
    }
  }
  let targetTime = dialTime[target];
  sum += Number(targetTime) + 2;
}

console.log(sum);

//!#2
