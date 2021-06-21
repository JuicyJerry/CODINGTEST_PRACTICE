//! #1
function solution(board, moves) {
  let stack = [];

  function doStack(target) {
    for (let i = 0; i < board[0].length; i++) {
      // console.log(board[i][target - 1]);

      if (board[i][target - 1] !== 0) {
        stack.push(board[i][target - 1]);
        board[i].splice(target - 1, 0, 0);
        break;
      }
    }
  }

  for (let t = 0; t < moves.length; t++) {
    let target = moves[t];
    doStack(target);
  }

  let cnt = 0;
  let t = -1;
  while (1) {
    t++;
    if (t >= stack.length) break;

    if (stack[t] === stack[t + 1]) {
      stack.splice(t, 2);
      cnt += 2;
      t = 0;
    }
  }

  return cnt;
}

/*
      [
          [0, 0, 0, 0, 0], 
          [0, 0, 1, 0, 3], 
          [0, 2, 5, 0, 1], 
          [4, 2, 4, 4, 2], 
          [3, 5, 1, 3, 1]], 
       
      
      [1, 5, 3, 5, 1, 2, 1, 4]
  */
