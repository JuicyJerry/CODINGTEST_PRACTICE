//! #1
/*
    임의의 수 n < 10,000
    1부터 셀프 넘버를 출력
    notSelfNum = [2, 4, 6, 8, 16, 23, 28, 38, 49, 52];
    selfNum = [1, 3];
    
    loop start.
    while (n < 10,000):
        1부터 9999까지 '어떤 정수와, 그 정수의 각 자리 숫자의 합'을 구한다.
        selfNum을 위한 배열과 !selfNum을 위한 배열을 만든다.
        
        각 배열에 해당하는 연산자를 추가한다.
        단, 두 배열에 있다면, 추가하지 않는다.
        
     loop end.
        
     selfNumArr을 출력
*/

let n,
  i = 1;
let selfNumArr = [1];
let notSelfNumArr = [];

while (n < 10000) {
  n = i;

  if (String(n).length > 1) {
    let sum = Number(n);
    let splitN = String(n).split("");

    for (let i = 0; i < splitN.length; i++) {
      sum += Number(splitN[i]);
    }

    if (notSelfNumArr.includes(sum) === false && n < 10000) {
      notSelfNumArr.push(sum);
    }
  } else if (String(n).length === 1) {
    let sum = Number(n) + Number(n);

    if (notSelfNumArr.includes(sum) === false && n < 10000) {
      notSelfNumArr.push(sum);
    }
  }

  if (
    n === 1 ||
    notSelfNumArr.includes(n) === false ||
    selfNumArr.includes(n) === false
  ) {
    selfNumArr.push(n);
  }
  i++;
}

for (let i = 0; i < selfNumArr.length; i++) {
  console.log(selfNumArr[i]);
}

//! #2
const selfNums = [];
const main = () => {
  for (let i = 1; i <= 10000; i++) {
    selfNums.push(i);
  }

  for (let i = 1; i <= 10000; i++) {
    const result =
      i +
      i
        .toString()
        .split("")
        .reduce((acc, cur) => acc + Number(cur), 0);

    const findIdx = selfNums.indexOf(result);
    //! const findIdx = selfNums.includes(result); -> 왜 안 될까?
    if (findIdx) {
      selfNums[findIdx] = false;
    }
  }

  for (const num of selfNums) {
    if (num) console.log(num);
  }
};
main();
