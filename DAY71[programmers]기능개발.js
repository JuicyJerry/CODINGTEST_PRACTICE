function solution(progresses, speeds) {
  let arr = [];
  let cnt = 0;
  let day = 0;

  while (progresses.length !== 0) {
    if (progresses[0] + day * speeds[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt += 1;
    } else {
      if (cnt != 0) {
        arr.push(cnt);
        cnt = 0;
      }
      day += 1;
    }
  }
  arr.push(cnt);

  return arr;
}
