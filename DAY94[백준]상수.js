let input = require("fs").readFileSync("/dev/stdin").toString();
let [num1, num2] = input.split(" ");
num1 = Number(num1.split("").reverse().join(""));
num2 = Number(num2.split("").reverse().join(""));

if (num1 > num2) console.log(num1);
else console.log(num2);
