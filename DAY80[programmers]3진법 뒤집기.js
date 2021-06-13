//!#1

function solution(n) {
  /*
        1. n을 3진법으로 변환
        - n이 0이 될 때까지, 나누어준다.
        - 각 나머지를 문자열로 만들어 unshift로 더해준다.
        
        2. 1의 결과값 뒤집기
        - reverse를 이용한다.
        
        3. 2의 결과값, 10진법으로 변환
        - 결과값의 마지막 요소부터 첫번째 요소순으로 탐색한다. (각 요소는 전 요소의 제곱)
        - 각 요소의 값 * (3^idx)
        - sum 변수를 이용해서 각 요소의 값을 누적값을 만든다.
        
        4. 3의 결과값을 반환
    */
  let remainder = [];
  while (n >= 1) {
    remainder.unshift(Math.floor(n % 3));
    n = n / 3;
  }

  remainder = parseInt(remainder.join(""));
  // remainder = parseInt(remainder.reverse().join(''), 3);
  let len = remainder.toString().length;
  let sum = 0;
  // let idx = 0;
  remainder = remainder.toString().split("");

  // for (let i = len - 1; i >= 0; i--) {
  for (let i = 0; i < remainder.length; i++) {
    sum += remainder[i] * 3 ** i;
    // idx++;
  }

  return sum;
  // return remainder;
}

//!#2
function solution(n) {
  let remainder = [];
  while (n >= 1) {
    remainder.unshift(Math.floor(n % 3));
    n = n / 3;
  }

  remainder = parseInt(remainder.join(""));
  let len = remainder.toString().length;
  let sum = 0;
  remainder = remainder.toString().split("");

  for (let i = 0; i < remainder.length; i++) {
    sum += remainder[i] * 3 ** i;
  }

  return sum;
}

//!#3
function solution(n) {
  let remainder = "";
  while (n) {
    let r = n % 3;
    remainder = r + remainder;
    n = Math.floor(n / 3);
  }
  return remainder
    .split("")
    .reduce((acc, cur, idx) => acc + Number(cur) * 3 ** idx, 0);
}
