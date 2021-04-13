function solution(s) {
  let answer = true;
  let t = s.split("");
  console.log(t);
  let left = 0;

  if (t[0] === ")") return false;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "(") {
      left++;
    } else if (left >= 1 && t[i] === ")") {
      left--;
    }
  }

  if (t[0] === ")" || left !== 0) answer = false;
  // if (t.indexOf(')') === -1 && t.indexOf('(') === -1) answer = false;

  return answer;
}

/*
function solution(s){
    let answer = true;

    let t = s.split('');
    console.log(t);
    
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '(' && t[i + 1] === ')') {
            t.splice(i, 2);
            i = 0;
            break;
        }
    }
    
    if (t[0] === ')' || t.length % 2 !== 0) answer = false;
    if (t.indexOf(')') === -1 || t.indexOf('(') === -1) answer = false;
    return answer;
}
*/
