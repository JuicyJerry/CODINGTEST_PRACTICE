/*
    1 : 1
    2-7 : 2
    8-19: : 3
    20-37 : 4
    38-61: 5
*/

let input = Number(require("fs").readFileSync("/dev/stdin").toString());
let n = 1;
let cnt = 1;

while (n < input) {
  n += cnt++ * 6;
}

console.log(cnt);
