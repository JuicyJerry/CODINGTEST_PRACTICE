function solution(n) {
  let answer = 0;
  let cnt = 0;
  let arr = [0, 1];

  while (n > 0) {
    let prev1 = arr[cnt];
    let prev2 = arr[cnt + 1];
    let now = prev1 + prev2;
    arr.push(now);
    cnt++;
    console.log(arr);
    if (cnt === n) return arr[n];
  }
}
