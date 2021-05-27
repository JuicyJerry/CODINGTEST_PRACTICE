function solution(N, stages) {
  let level = 1;
  let result = [];

  while (level < N + 1) {
    let currentUser = 0;
    let attendedUser = 0;

    for (let i = 0; i < stages.length; i++) {
      if (level <= stages[i]) attendedUser++;
      if (stages[i] === level) currentUser++;
    }

    let failRatio = (currentUser / attendedUser) * 100;
    result.push({ idx: level, ratio: failRatio });
    level++;
  }

  result.sort((a, b) => {
    if (a.ratio > b.ratio) return -1;
    else if (a.ratio < b.ratio) return 1;
    else {
      if (a.idx > b.idx) return 1;
      else return -1;
    }
  });

  return result.map((el) => el.idx);
}
