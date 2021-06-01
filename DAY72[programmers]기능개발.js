function solution(progresses, speeds) {
  let cnt = 0;
  let arr = [];

  while (progresses[0]) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }

    if (cnt > 0) {
      arr.push(cnt);
      cnt = 0;
    }
  }
  return arr;
}
