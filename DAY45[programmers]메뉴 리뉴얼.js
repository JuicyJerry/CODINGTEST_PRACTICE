function solution(orders, course) {
  // orders 요소를 탐색하여, course의 요소 값에 해당하는 조합을 객체에 등록
  let obj = {};
  let arr = [];

  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < orders.length; j++) {
      if (arr.indexOf(orders[i][j]) === -1 && orders[i][j] !== undefined)
        arr.push(orders[i][j]);
    }
  }
  console.log(arr);

  // 등록한 조합을 이용해, orders의 요소와 일치 여부를 확인하여 갯수 업데이트

  // 갯수가 2번 이상 조회된 조합을 배열에 넣어줌
}
