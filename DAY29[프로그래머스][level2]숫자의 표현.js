function solution(n) {
  let answer = 0;

  function findNum(current, sum) {
    if (sum === n) return true;
    if (sum > n) return false;
    return findNum(current + 1, sum + current);
  }

  for (let i = 1; i <= n; i++) {
    if (findNum(i, 0)) answer++;
  }

  return answer;
}

// function solution(n) {
//     let answer = 0;
//     let sum = 0;
//     let target = n;
//     let numbers = getNumbers(n);

//     const dfs = (numbers, target, node) => {
//         if (node === numbers.length) {
//             console.log(numbers);
//             sum = 0;
//             for (let num of numbers) {
//                 sum += num;
//             }
//             if (sum === target) {
//                 return answer++;
//             }
//         } else {
//             numbers[node] *= 1;
//             dfs(numbers, target, node + 1);

//             numbers[node] *= -1
//             dfs(numbers, target, node + 1);
//         }
//     }
//     dfs(numbers, target, 0);
//     return answer;
// }

// function getNumbers(n) {
//     let arr = [];
//     for (let i = 1; i < n; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// // #2
// function solution(n) {
//     let answer = 0;
//     let sum = 0;
//     let start = 1;

//     for (let i = start; i <= n; i++) {
//         sum += i;
//         if (sum === n) {
//             answer++;
//             i = start + 1;
//             sum = 0;
//         }
//         if (sum > n) {
//              i = start + 1;
//             sum = 0;
//         }
//     }

//     return answer;
// }
