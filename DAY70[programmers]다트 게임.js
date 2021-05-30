function solution(dartResult) {
  let dr = dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g);
  let score = [];

  for (let i = 0; i < 3; i++) {
    // let num = dr[i].match(/[0-9]/g);
    let num = dr[i].match(/\d{1,2}/g);
    let str = dr[i].match(/[SDT]{1}/g);
    let option = dr[i].match(/[*|#]/g);

    if (str[0] === "S") num = num ** 1;
    else if (str[0] === "D") num = num ** 2;
    else if (str[0] === "T") num = num ** 3;

    if (option !== null && option[0] === "*") {
      num *= 2;
      if (i != 0) score[i - 1] *= 2;
    } else if (option !== null && option[0] === "#") {
      num *= -1;
    }

    score.push(num);
  }
  return score.reduce((acc, cur) => acc + cur, 0);
}
