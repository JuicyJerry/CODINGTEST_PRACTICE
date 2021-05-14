function solution(n) {
  let sum = 0;
  let nToStr = n.toString();
  let nToStrLen = nToStr.length - 1;

  return nToStr
    .split("")
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur), sum);
}
