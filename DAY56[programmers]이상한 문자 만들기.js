//? #1
function solution(s) {
  let idx = 0;
  s = s.split("");
  console.log(s);

  while (idx !== s.length) {
    if (s[idx] === " ") continue;
    idx % 2 === 0 ? (s[idx] = s[idx].toUpperCase()) : s[idx].toLowerCase();
    idx++;
  }

  console.log(s);
  return s.join("");
}

//? #2
function solution(s) {
  let idx = 0;
  s = s.split("");

  return s.reduce((acc, cur, idx) => {
    if (idx % 2 === 0 && typeof cur === "string") {
      cur = cur.toLowerCase();
      return acc + cur;
    } else if (idx % 2 !== 0 && typeof cur === "string") {
      cur = cur.toUpperCase();
      return acc + cur;
    }
  }, "");
}

//? #3
function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      let result = "";
      for (let i = 0; i < word.length; i++) {
        if (i % 2) {
          result += word[i].toLowerCase();
        } else {
          result += word[i].toUpperCase();
        }
      }
      return result;
    })
    .join(" ");
}

//! final answer
function solution(s) {
  s = s.split("");
  let ans = "";
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      idx = 0;
      ans += " ";
      continue;
    }

    if (idx % 2 === 0) {
      ans += s[i].toUpperCase();
    } else {
      ans += s[i].toLowerCase();
    }
    idx++;
  }
  return ans;
}
