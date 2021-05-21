function solution(x) {
  let arr = String(x).split("");
  let len = arr.length;
  let sum = 0;

  for (let i = 0; i < len; i++) sum += parseInt(arr[i]);
  if (x % sum === 0) return true;
  return false;
}
