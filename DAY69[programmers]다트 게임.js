function solution(dartResult) {
  let answer = 0;
  let n = 1;

  let numRegExp = /[0-9]/g;
  let strRegExp = /[A-Z]/g;
  let optionRegExp = /[*|#]/g;

  let numArr = dartResult.match(numRegExp);
  let strArr = dartResult.match(strRegExp);
  let optionArr = dartResult.match(optionRegExp);

  console.log(numArr);
  console.log(strArr);
  console.log(optionArr);

  let optionObj = {};
  if (optionArr === null) optionArr = 0;
  else if (optionArr.length !== 3) {
    for (let i = 0; i < optionArr.length; i++) {
      let strIdxBeforeOption = dartResult.indexOf(optionArr[i]) - 1;
      let optionIdx = strIdxBeforeOption + 1;

      if (Object.values(optionObj).includes(optionArr[i])) {
        for (let j = 0; j < dartResult.length; j++) {
          // if (!Object.values(optionObj).includes(optionArr[i])) {
          optionObj[i] = optionArr[i];
          // }
        }
        console.log("!:    ", Object.values(optionObj));
      } else {
        let optionLevel = strArr.indexOf(dartResult[strIdxBeforeOption]);
        optionObj[optionLevel] = optionArr[i];
      }
    }
  }
  console.log(optionObj);

  let arr = [];
  //     for (let i = 0; i < 3; i++) {
  //         if (strArr[i] === 'S') {
  //             n = numArr[i] ** 1;

  //             if (Object.keys(optionObj) === 0 ** ) {
  //                 n
  //             } else {

  //             }
  //         }
  //         else if (strArr[i] === 'D') n = numArr[i] ** 2;
  //         else if (strArr[i] === 'T') n = numArr[i] ** 3;

  //     }
}
