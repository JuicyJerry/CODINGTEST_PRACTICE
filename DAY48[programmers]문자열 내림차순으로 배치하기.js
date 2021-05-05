//! #1
return s.split("").sort().reverse().join("");

//! #2
return [...s].sort().reverse().join("");

//! #3
function solution(s) {
  let big = [...s]
    .filter((e) => e === e.toUpperCase())
    .sort()
    .reverse();
  let small = [...s]
    .filter((e) => e === e.toLowerCase())
    .sort()
    .reverse();

  console.log(big, small);

  // console.log(small.concat(big).join(''));
  return small.concat(big).join("");
}

//! #4
function solution(s) {
  let big = [...s]
    .filter((e) => e === e.toUpperCase())
    .sort()
    .reverse();
  let small = [...s]
    .filter((e) => e === e.toLowerCase())
    .sort()
    .reverse();

  console.log(big, small);

  let smallBig1 = [small, big];
  let smallBig2 = [...small, ...big];
  console.log(smallBig1);
  console.log(smallBig2);
  // return smallBig2.reduce((a, b) => a + b, '');
  return smallBig1.reduce((a, b) => a + b, "");
}
