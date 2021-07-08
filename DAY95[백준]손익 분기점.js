//! #1
/*
    A: 고정 비용, B: 가변 비용 C: 소비자 가격
    
    a + b <= c 지점
    1000 / 70 / 170
    9  : 1,000 / 630 / 1530
    10 : 1,000 / 700 / 1700
    11 : 1,000 / 770 / 1870
*/

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));
let [fixedPrice, variablePrice, customerPrice] = input;
let bep = 0;
let f = fixedPrice;
let v = 0;
let c = 0;

while (1) {
  console.log(f + v, c);
  if (f + v < c && bep !== 0) break;
  else if (f > 2100000000 || v > 2100000000 || c > 2100000000) {
    bep = -1;
    break;
  }

  //    f = fixedPrice * (bep + 1);
  v = variablePrice * (bep + 1);
  c = customerPrice * (bep + 1);

  bep++;
}

console.log(bep);

// #2
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));
let [f, v, c] = input;
let netProfit = c - v;

if (c <= v) {
  console.log(-1);
} else {
  console.log(Math.floor(f / netProfit) + 1);
}
