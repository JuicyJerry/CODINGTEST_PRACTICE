function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el === " ") return el;
      if (el.toUpperCase().charCodeAt() + n > 90) {
        return String.fromCharCode(el.charCodeAt() + n - 26);
      } else return String.fromCharCode(el.charCodeAt() + n);
    })
    .join("");
}
