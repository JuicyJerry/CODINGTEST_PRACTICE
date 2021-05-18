function solution(s) {
  let ans = 0;
  let repeat = s.length;
  let arrForNewStr = [];

  for (let i = 0; i < repeat; i++) {
    let num = i + 1;
    let count = 1;
    let newStr = "";

    for (let j = 0; j < s.length; j = j + num) {
      let currentSub = s.substring(j, j + num);
      let nextSub = s.substring(j + num, j + num + num);

      if (currentSub === nextSub) {
        count += 1;
      } else {
        if (count !== 1) {
          newStr = newStr + count + currentSub;
        } else {
          newStr = newStr + currentSub;
        }
        count = 1;
      }
    }
    arrForNewStr.push(newStr.length);
  }
  ans = Math.min(...arrForNewStr);
  return ans;
}
