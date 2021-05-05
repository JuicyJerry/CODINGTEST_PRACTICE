//! #1
function solution(s) {
  s = s.toUpperCase();
  let p = 0;
  let y = 0;

  s.split("").forEach((e) => {
    if (e === "P") p++;
    else if (e === "Y") y++;
  });

  return p === y ? true : false;
}

//! #2
return s.match(/p/gi).length == s.match(/y/gi).length;
