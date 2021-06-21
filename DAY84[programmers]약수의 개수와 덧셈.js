function findDividor(input) {
  let arr = [];
  for (let i = 1; i <= input; i++) {
    if (input % i === 0) arr.push(i);
  }
  return arr;
}

function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    let target = findDividor(i);
    if (target.length % 2 === 0) sum += i;
    else sum -= i;
  }
  return sum;
}
