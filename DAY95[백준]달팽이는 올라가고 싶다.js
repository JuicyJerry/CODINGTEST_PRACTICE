//! #1 (시간 초과)
/*
    up, down, height
    day++;
    
    if : up + down >= heigth => return day;
    else up + down & day++
    
*/

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));
let [up, down, height] = input;
let total = 0;
let day = 1;

while (total < height) {
  total += up - down;
  day++;
}

console.log(day);

//! #2
/*
    up, down, height
    day++;
    
    if : up + down >= heigth => return day;
    else up + down & day++
    
*/

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((el) => Number(el));
let [up, down, height] = input;

console.log(Math.ceil((height - down) / (up - down)));
