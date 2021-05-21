function solution(phone_number) {
  let tail = phone_number.slice(-4);
  let len = phone_number.length;
  let ret = "";

  for (let i = 0; i < len - 4; i++) {
    ret += "*";
  }

  return ret.concat(tail);
}
