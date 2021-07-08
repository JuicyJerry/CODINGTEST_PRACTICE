//! #1
let input = Number(require("fs").readFileSync("/dev/stdin").toString());
let cnt = 1;
let sum = 0;
let prevSum = 0;
/*
    1 : 1 (1/1) 1
    2 : 3 (1/2, 2/2, 2/1) 4
    3 : 5 (3/1, 3/2, 3/3, 2/3, 1/3) 9
    4 : 7 (1/4, 2/4, 3/4, 4/4, 4/3, 4/3, 4/2, 4/1) 16
    ...
*/

while (1) {
  sum += 2 * cnt++ - 1;
  if (sum > input) {
    prevSum -= 2 * (cnt - 1) - 1;
    cnt--;
    break;
  }
}

let left, right;
if (cnt % 2 === 0) {
  left = 1;
  right = cnt;

  while (prevSum < input) {
    if (left === cnt) {
      prevSum++;
      right--;
    } else {
      prevSum++;
      left++;
    }
  }
  console.log(Number(left) + "/" + Number(right));
} else {
  left = cnt;
  right = 1;

  while (sum < input) {
    sum++;
    left++;
  }
  console.log(Number(left) + "/" + Number(right));
}

//! #2
let input = Number(require("fs").readFileSync("/dev/stdin").toString());
let cnt = 1;
let sum = 0;
let prevSum = 0;
/*
    1 : 1 (1/1) 1
    2 : 2 (1/2, 2/1) 3
    3 : 3 (3/1, 2/2, 1/3) 6
    4 : 4 (1/4, 2/3, 3/2, 4/1) 10
    5 : 5 (5/1, 4/2, 3/3, 2/4, 1/5) 15
    ...
*/

while (1) {
  sum += cnt;
  if (sum >= input) {
    prevSum = sum - cnt;
    prevSum++;
    break;
  }
  cnt++;
}

let left, right;
if (cnt % 2 === 0) {
  left = 1;
  right = cnt;

  while (prevSum < input) {
    left++;
    right--;
    prevSum++;
  }

  console.log(Number(left) + "/" + Number(right));
} else {
  left = cnt;
  right = 1;

  while (prevSum < input) {
    left--;
    right++;
    prevSum++;
  }
  console.log(Number(left) + "/" + Number(right));
}
