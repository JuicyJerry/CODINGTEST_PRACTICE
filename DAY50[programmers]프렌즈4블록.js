// search fn
function isSame(j, i, board, cnt, idxContainer) {
  let tempContainer = [];

  for (let y = j; y < j + 2; y++) {
    for (let x = i; x < i + 2; x++) {
      tempContainer.push(board[y][x]);
    }
  }

  let standard = tempContainer[0];
  //     let regex = /${standard}/ig;
  let regex = new RegExp(`${standard}`, "ig");

  // 불일치
  let matchStr = tempContainer.join("");
  let match = matchStr.match(regex);

  if (match.length !== 4) return;

  // 일치, 해당 요소 인덱스 보관
  for (let y = j; y < j + 2; y++) {
    for (let x = i; x < i + 2; x++) {
      let yx = y + "" + x;
      if (!idxContainer.includes(yx)) idxContainer.push(yx);
    }
  }
  return idxContainer;
}

function doDelete(y, x, board) {
  for (let t = 0; t < board[0].length; t++) {
    board[y][x] = "0";
  }
  console.log(board);
}

// main fn
function solution(m, n, board) {
  let cnt = 0;
  let idxContainer = [];

  for (let j = 0; j < m - 1; j++) {
    for (let i = 0; i < n - 1; i++) {
      // board[j][i] 기준, 2x2가 같은 요소인지 여부
      isSame(j, i, board, cnt, idxContainer);
    }
  }

  if (!idxContainer.length) return cnt;
  else console.log(idxContainer);

  cnt += idxContainer.length;

  for (let t = 0; t < idxContainer.length; t++) {
    let y = parseInt(idxContainer[t].split("")[0]);
    let x = parseInt(idxContainer[t].split("")[1]);

    doDelete(y, x, board);
  }

  console.log(board);
  return;

  idxContainer = [];
  m = board.length;
  n = board[0].length;

  return solution(m, n, board);
}
