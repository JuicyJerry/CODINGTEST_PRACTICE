//! 나의 풀이
function solution(s) {
  let answer = true;

  s = s.split("").filter((el) => {
    return parseInt(el) / 1 === parseInt(el);
  });
  console.log(s);

  if (s.length === 4 || s.length === 6) answer = true;
  else answer = false;

  return answer;
}

//! 다른 풀이
function solution(s) {
  const len = s.length;

  if (len === 4 || len === 6) {
    // return s.split('').filter((el) => !isNaN(el));
    return s.split("").every((c) => !isNaN(c));
  }
  return false;
}
