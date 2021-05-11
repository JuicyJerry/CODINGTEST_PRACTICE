function solution(rows, columns, queries) {
  let matrix = [];
  let nestedArr = [];
  // 2중 배열로 1 ~ rows * columns만큼 숫자를 채워준다.
  for (let i = 1; i <= rows * columns; i++) {
    nestedArr.push(i);
    if (i % 6 === 0) {
      matrix.push(nestedArr);
      nestedArr = [];
    }
  }

  // console.log(matrix)

  // queries의 0 ~ 2의
  let idx = 0;
  while (idx !== queries.length) {
    let x1 = queries[idx][0];
    let y1 = queries[idx][1];
    let x2 = queries[idx][2];
    let y2 = queries[idx][3];

    for (let j = 1; j <= rows; j++) {
      for (let i = 1; i <= columns; i++) {
        if (i === y1 && j === x1) {
          doMove(matrix, j, i, x2 - x1, y2 - y1);
        }
      }
      idx++;
    }
  }
}

function doMove(m, j, i, r, q) {
  let tempArr = [];
  for (let y = j; y <= r; y++) {
    for (let x = i; x <= q; x++) {
      tempArr.push(m[y][x]);
    }
  }

  console.log(tempArr);
}
