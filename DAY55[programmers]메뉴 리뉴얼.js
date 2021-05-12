function solution(orders, course) {
  // 최소 단위 문자 요소 배열 구하기
  let ordersMinimumStringElements = "";

  for (let i = 0; i < orders.length; i++) {
    let target = orders[i].split("");

    target.forEach((str) => {
      if (!ordersMinimumStringElements.includes(str))
        ordersMinimumStringElements += str;
    });
    ordersMinimumStringElements.concat(target.join(""));
  }

  // 각 문자 요소 조합 만들기
  let combinationStr = {};
  ordersMinimumStringElements = ordersMinimumStringElements.split("");
  // console.log('ordersMinimumStringElements: ', ordersMinimumStringElements);

  for (let i = 0; i < course.length; i++) {
    let combinationLength = course[i];
    let idx = 0;
    while (idx < ordersMinimumStringElements.length) {
      let standard = ordersMinimumStringElements[idx];

      for (let j = 0; j < ordersMinimumStringElements.length; j++) {
        if (ordersMinimumStringElements[j] != standard) {
          standard += ordersMinimumStringElements[j];
        }
        if (standard.length === combinationLength) {
          standard = standard.split("").sort().join("");
          combinationStr[standard] = 0;
          standard = ordersMinimumStringElements[idx];
        }
      }
      idx++;
    }
  }
  // console.log(combinationStr);

  let combinationStrToArr = Object.entries(combinationStr)
    .flat()
    .filter((el) => typeof el === "string");
  // console.log(combinationStrToArr)

  // 주문 개수 카운팅
  for (let i = 0; i < orders.length; i++) {
    combinationStrToArr.forEach((el) => {
      let regex = new RegExp(`${el}`, "ig");
      if (orders[i].match(regex)) combinationStr[el]++;
    });
  }
  console.log(Object.entries(combinationStr).filter((el) => el[1] >= 2));
}
