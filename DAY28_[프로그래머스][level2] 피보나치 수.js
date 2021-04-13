function solution(n) {
  let cnt = 1;
  let prev1 = 0;
  let prev2 = 1;

  while (n >= cnt) {
    let now = (prev1 + prev2) % 1234567;
    prev1 = prev2;
    prev2 = now;
    cnt++;
    if (cnt === n) return now;
  }
}
// #1
// function solution(n) {
//     let answer = 0;
//     let cnt = 0;
//     let arr = [0, 1]

//     while (n > 0) {
//         let prev1 = arr[cnt];
//         let prev2 = arr[cnt + 1];
//         let now = prev1 + prev2;
//         arr.push(now);
//         cnt++;
//         // console.log(arr);
//         if (cnt === n) return arr[n];
//     }
// }

// #2
//     let cnt = 1;
//     let prev1 = 0;
//     let prev2 = 1;

//     while (n > 0) {
//         let now = prev1 + prev2;
//         prev1 = prev2;
//         prev2 = now;
//         cnt++;
//         if (cnt === n) return now % 1234567;
//     }

// #3
// if (cnt === n) return n % 1234567;
// if (n < 2) return n;
// return solution(n - 1) + solution(n - 2);
