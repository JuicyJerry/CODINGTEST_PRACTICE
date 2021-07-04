let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let len = Number(input[0]);
let resultMinMax = input[1].split(" ").reduce(
  (minMax, num) => {
    const number = parseInt(num);

    minMax[0] = minMax[0] > number ? number : minMax[0];
    minMax[1] = minMax[1] < number ? number : minMax[1];

    return minMax;
  },
  [1000000, -1000000]
);

console.log(resultMinMax.join(" "));
