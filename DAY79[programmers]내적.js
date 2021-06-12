function solution(a, b) {
  /*
        a와 b의 각 배열 idx 요소끼리 곱한 값을 누적값으로 반환
    */

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}
