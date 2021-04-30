//! #1
function solution(n, lost, reserve) {
  let answer = 0;
  let all = new Array(n).fill(0).map((_, idx) => idx + 1);
  let normal = all.filter(
    (item) => lost.indexOf(item) === -1 && reserve.indexOf(item) === -1
  );
  answer = normal.length + reserve.length - 1;

  let obj = {};
  for (let i = 0; i < lost.length; i++) {
    obj[lost[i]] = 1;
  }

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i] - 1) && obj[reserve[i] - 1] === 1) {
      obj[reserve[i] - 1]--;
      answer++;
    }
    if (lost.includes(reserve[i] - 1) && obj[reserve[i] + 1] === 1) {
      obj[reserve[i] - 1]--;
      answer++;
    }
  }
  console.log(obj, answer);

  return answer;
}

//! #2
function solution(n, lost, reserve) {
  let ans = new Array(n).fill(1);
  console.log(ans);
  reserve.forEach((i) => (ans[i - 1] = 2));
  console.log(ans);
  lost.forEach((i) => (ans[i - 1] = 0));
  console.log(ans);
  ans.forEach((i, idx) => {
    if (i === 0 && ans[idx - 1] === 2) {
      ans[idx] = 1;
      ans[idx - 1] = 1;
    } else if (i === 0 && ans[idx + 1] === 2) {
      ans[idx] = 1;
      ans[idx + 1] = 1;
    }
    console.log("! :", ans);
  });

  let ret = 0;
  for (let el of ans) {
    if (el > 0) ret++;
  }
  return ret;
}

//! answer
/*
  ? from ans[i - 1] = 2 and ans[i - 1] = 0 
  ? to ans[i - 1]++와 ans[i - 1]-- 
*/
function solution(n, lost, reserve) {
  let ans = new Array(n).fill(1);
  reserve.forEach((i) => ans[i - 1]++);
  lost.forEach((i) => ans[i - 1]--);
  ans.forEach((i, idx) => {
    if (i === 0 && ans[idx - 1] === 2) {
      ans[idx] = 1;
      ans[idx - 1] = 1;
    } else if (i === 0 && ans[idx + 1] === 2) {
      ans[idx] = 1;
      ans[idx + 1] = 1;
    }
  });

  let ret = 0;
  for (let el of ans) {
    if (el > 0) ret++;
  }
  return ret;
}
