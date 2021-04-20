function solution(n, a, b) {
  let ans = 0;

  while (a != b) {
    // [a, b] = oddToEven(a, b);

    // a = (a /= 2);
    // b = (b /= 2);
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    ans++;
  }
  return ans;
}

// function oddToEven(a, b) {
//     if (a % 2 !== 0) a++;
//     if (b % 2 !== 0) b++;

//     return [a, b];
// }
