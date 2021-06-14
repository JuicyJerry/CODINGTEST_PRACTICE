const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = [];
function solution(nums, permutation) {
  if (nums.length === 0) answer.push(permutation.split("").join(" "));
  else {
    for (let i = 0; i < nums.length; i++) {
      solution(nums.slice(0, i) + nums.slice(i + 1), permutation + nums[i]);
    }
  }
}

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = input.shift();
  let nums = "";
  for (let i = 1; i <= n; i++) {
    nums += i; // nums = '12345..n'
  }

  solution(nums, "");
  console.log(answer.join("\n"));

  process.exit();
});

//! 테스트
debugger;
let answer = [];
function solution(nums, permutation) {
  if (nums.length === 0) answer.push(permutation.split("").join(" "));
  else {
    for (let i = 0; i < nums.length; i++) {
      console.log(
        "nums.slice(0, i)" + nums.slice(0, i),
        "nums.slice(i + 1)" + nums.slice(i + 1),
        "permutation" + permutation,
        "nums[i]" + nums[i]
      );
      solution(nums.slice(0, i) + nums.slice(i + 1), permutation + nums[i]);
    }
  }
}

function main(t) {
  let input = [t];
  let n = input.shift();
  let nums = "";
  for (let i = 1; i <= n; i++) {
    nums += i; // nums = '12345..n'
  }

  solution(nums, "");
  console.log(answer.join("\n"));
}
main(4);
