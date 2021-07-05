//! #1
/*
    주어진 수의 나머지를 A 배열에 추가한다.
    순회하면서 indexOf 메서드를 이용해, 중복되는 수가 없으면 B 배열에 추가한다.
    B 배열의 길이를 반환한다.
    
    => 
*/

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((el) => Number(el));
let arr = [];
let notOverrideArr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i] % 42);
}

for (let i = 0; i < arr.length; i++) {
  if (notOverrideArr.indexOf(arr[i]) > -1) continue;
  else notOverrideArr.push(arr[i]);
}

console.log(Number(notOverrideArr.length));

//!#2
/*
    주어진 수의 나머지를 A 배열에 추가한다.
    순회하면서 indexOf 메서드를 이용해, 중복되는 수가 없으면 B 배열에 추가한다.
    B 배열의 길이를 반환한다.
    
    => 
*/

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let numbers = input.map((el) => Number(el));
let restArr = [];
let notOverrideArr = [];

for (let i = 0; i < numbers.length; i++) {
  restArr.push(input[i] % 42);
}

for (let i = 0; i < restArr.length; i++) {
  //    if (notOverrideArr.indexOf(restArr[i]) > -1) continue;
  //    else notOverrideArr.push(restArr[i]);

  if (notOverrideArr.indexOf(restArr[i]) === -1)
    notOverrideArr.push(restArr[i]);
}

console.log(notOverrideArr.length);
