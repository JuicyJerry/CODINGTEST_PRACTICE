function solution(array, commands) {
  let answer = [];
  let filtered = [];
  let k,
    idx = -1;
  commands.filter((i) => {
    filtered = [];
    console.log(i);
    idx++;

    for (let j = i[0]; j <= i[1]; j++) {
      filtered.push(array[j - 1]);
      console.log(j + " :" + filtered);
    }
    k = commands[idx][2];

    console.log("filtered :" + filtered);
    filtered.sort((a, b) => {
      return a - b;
    });

    console.log("filtered + sorted :" + filtered);
    console.log("k :" + k);
    answer.push(filtered[k - 1]);

    console.log("answer: " + answer + "\n");
  });

  return answer;
}
