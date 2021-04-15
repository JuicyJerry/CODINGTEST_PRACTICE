function solution(arr1, arr2) {
  let answer = [];
  let sum = 0;
  let temp = [];

  for (let y = 0; y < arr1.length; y++) {
    for (let x = 0; x < arr2[0].length; x++) {
      for (let z = 0; z < arr2.length; z++) {
        sum = sum + arr1[y][z] * arr2[z][x];
      }
      temp.push(sum);
      sum = 0;
    }
    answer.push(temp);
    temp = [];
  }
  return answer;
}
