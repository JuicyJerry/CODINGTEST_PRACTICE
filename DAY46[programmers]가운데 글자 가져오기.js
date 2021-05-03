//! #1
function solution(s) {
  let len = s.length;
  console.log(len % 2);
  if (len % 2 === 1) return s[Math.floor(len / 2)];
  return s
    .split("")
    .splice(len / 2 - 1, 2)
    .join("");
}

//! #2
function solution(s) {
  let len = s.length;
  console.log(len % 2);
  if (len % 2 === 1) return s[Math.floor(len / 2)];
  return s.slice(len / 2 - 1, len / 2 + 1);
}
