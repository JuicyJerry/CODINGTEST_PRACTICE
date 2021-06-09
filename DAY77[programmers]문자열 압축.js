//! first try
function solution(s) {
  let arrForLen = [];
  // (arrForLen = []).length = s.length; // (new Array(length).fill(0) 같은 의미 but, 속도가 느리다고 한다. 왜지?);
  // arrForLen.fill(0);
  let arrForEachUnit = [];

  while (1) {
    let strLen = 1;
    let cnt = 0;
    let tempStr = "";

    for (let q = 0; q < s.length; q += 1) {
      for (let t = 0; t < s.length; t += strLen) {
        if (s[t] !== s[t + 1]) {
          // cnt++;

          if (cnt === 1) {
            tempStr += s.slice(t, t + 1);
          } else {
            tempStr += cnt + s.slice(t, t + 1);
          }

          arrForLen.push(tempStr.length);
          cnt = 0;
          tempStr = "";
        } else {
          if (s.slice(q, t + 1)) {
            cnt++;
          }
        }
      }
      strLen++;
      arrForEachUnit.push(arrForLen.join(""));
    }
    if (strLen > s.length / 2) break;
  }

  console.log(arrForLen);
}

// ==============================

//! submit code
function solution(s) {
  // (arrForLen = []).length = s.length; // (new Array(length).fill(0) 같은 의미 but, 속도가 느리다고 한다. 왜지?);
  // arrForLen.fill(0);
  let arrForLen = [];

  for (let q = 0; q < s.length; q += 1) {
    let strLen = q + 1;
    let cnt = 1;
    let tempStr = "";

    for (let t = 0; t < s.length; t += strLen) {
      let currentStr = s.substring(t, t + strLen);
      let nextToCurrentStr = s.substring(t + strLen, t + strLen + strLen);

      if (currentStr === nextToCurrentStr) cnt++;
      else {
        if (cnt !== 1) {
          tempStr += cnt + currentStr;
        } else {
          tempStr += currentStr;
        }
        cnt = 1;
      }
    }
    arrForLen.push(tempStr.length);
    if (strLen > s.length / 2) break;
  }
  return Math.min(...arrForLen);
}
