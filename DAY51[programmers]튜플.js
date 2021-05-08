function solution(s) {
  let answer = [];

  for (const [key, value] of Object.entries(s)) {
    // console.log(`${key}: ${parseInt(value)}`);
    console.log(typeof parseInt(value));
    if (
      typeof parseInt(value) === "number" &&
      value !== "{" &&
      value !== "}" &&
      value !== "," &&
      answer.indexOf(parseInt(value)) === -1
    )
      answer.push(parseInt(value));
  }

  console.log(answer);
  return answer;
}
