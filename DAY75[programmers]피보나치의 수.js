//!#1
function solution(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (n >= 2) {
    return solution(n - 2) + solution(n - 1);
  }
}

//! #2
/* 
    0부터 n까지 피보나치 수의 n번째 수
    n번째 수 % 1234567를 반환
    n의 값이 31만 해도 백삼십만이 넘어감.. 
    https://keisan.casio.com/exec/system/1180573404
    
    (A+B)%C = ((A%C)+(B%C))%C 라는 수의 속성 이용

    시간복잡도 O(n);
*/
function solution(n) {
  let answer = fib(n) % 1234567;
  return answer;
}

function fib(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] % 1234567) + (arr[i - 2] % 1234567);
  }
  return arr[n];
}
